/**
 * server.js
 * Lightweight Express server to:
 *  - serve static files from repository root
 *  - provide a small students API for prototyping (GET/POST)
 *
 * If USE_DB=true and MONGODB_URI is set, server will persist students using Mongoose.
 */

const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;
const USE_DB = process.env.USE_DB === 'true';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/awd_practicals_db';

const app = express();
app.use(cors());
app.use(express.json());

// In-memory fallback dataset
let studentsInMemory = [
  { id: 1, name: 'Narendra Borhade', roll: 9, dept: 'MCA' },
  { id: 2, name: 'Vaibhav Bhor', roll: 7, dept: 'MCA' },
  { id: 3, name: 'Vaibhav singh', roll: 33, dept: 'BCA' }
];

// --- Mongoose model (used only if USE_DB=true) ---
let StudentModel = null;
async function initDb() {
  if (!USE_DB) return;
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    const studentSchema = new mongoose.Schema({ name: String, roll: Number, dept: String }, { timestamps: true });
    StudentModel = mongoose.model('Student', studentSchema);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

// API: list students
app.get('/api/students', async (req, res) => {
  if (USE_DB) {
    const docs = await StudentModel.find().lean().exec();
    return res.json(docs);
  }
  res.json(studentsInMemory);
});

// API: create a student
app.post('/api/students', async (req, res) => {
  const { name, roll, dept } = req.body || {};
  if (!name || !roll) return res.status(400).json({ message: 'name and roll are required' });

  if (USE_DB) {
    try {
      const s = await StudentModel.create({ name, roll: Number(roll), dept: dept || '' });
      return res.status(201).json(s);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'DB error' });
    }
  }

  const id = studentsInMemory.length ? Math.max(...studentsInMemory.map(s => s.id)) + 1 : 1;
  const newStudent = { id, name, roll: Number(roll), dept: dept || '' };
  studentsInMemory.push(newStudent);
  res.status(201).json(newStudent);
});

// Serve static repo files
app.use(express.static(path.join(__dirname)));

// Fallback route: open practical9 by default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'practical9 AWD.html'));
});

// Start
initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`AWD practicals server running at http://localhost:${PORT}`);
    if (USE_DB) console.log('USE_DB=true → using MongoDB at', MONGODB_URI);
  });
});
