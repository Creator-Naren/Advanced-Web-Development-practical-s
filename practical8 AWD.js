const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/schoolDB'); 
const studentSchema = new mongoose.Schema({ name: String, rollNo: Number }); 
const Student = mongoose.model('Student', studentSchema); 
// Create Example 
const newStudent = new Student({ name: "Narendra Borhade", rollNo: 9 }); 
newStudent.save().then(() => console.log("Record Inserted")); 
// Read Example 
Student.find().then(data => console.log(data));