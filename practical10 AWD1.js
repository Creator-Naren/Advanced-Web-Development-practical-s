const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware to parse form data (using Express's built-in parser)
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/labDB')
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Connection failed", err));

// Define Schema and Model
const studentSchema = new mongoose.Schema({ 
    name: String,
    email: String, 
    course: String
});
const Student = mongoose.model('Student', studentSchema);

// Route to serve the HTML Form
app.get('/', (req, res) => {
    // FIXED: Added .html extension to the file name
    res.sendFile(path.join(__dirname, 'practical10 AWD.html'));
});

// Route to handle Form Submission
app.post('/add-student', async (req, res) => {
    const newStudent = new Student({ 
        name: req.body.name,
        email: req.body.email, 
        course: req.body.course
    });

    try {
        await newStudent.save();
        res.send("<h2>Data successfully inserted into MongoDB!</h2><a href='/'>Go Back</a>");
    } catch (err) {
        res.status(500).send("Error inserting data: " + err);
    }
});

app.listen(3000, () => console.log("Server started on http://localhost:3000"));