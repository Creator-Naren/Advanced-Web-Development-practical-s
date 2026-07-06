const mongoose = require('mongoose');

// --- CONNECTION ---
mongoose.connect('mongodb://127.0.0.1:27017/AWD_Lab_DB')
.then(() => {
    console.log('Connected to MongoDB...');
    createDataModels();   // ✅ CALL AFTER CONNECTION
})
.catch(err => console.error('Could not connect...', err));


// --- EMBEDDED MODEL ---
const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    zip: Number
});

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: addressSchema
});

const Student = mongoose.model('Student', studentSchema);


// --- REFERENCE MODEL ---
const teacherSchema = new mongoose.Schema({
    name: String,
    department: String
});
const Teacher = mongoose.model('Teacher', teacherSchema);

const courseSchema = new mongoose.Schema({
    title: String,
    credits: Number,
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    }
});
const Course = mongoose.model('Course', courseSchema);


// --- FUNCTION ---
async function createDataModels() {
    try {
        // Embedded
        const student = new Student({
            name: "Narendra Borhade",
            age: 9,
            address: { street: "Charoli phata", city: "Pune", zip: 412105 }
        });

        await student.save();
        console.log("Embedded Student Record Created");

        // Referenced
        const teacher = new Teacher({
            name: "Dr. Priynka Abhang",
            department: "MCA"
        });

        await teacher.save();

        const course = new Course({
            title: "Advanced Web Development",
            credits: 4,
            instructor: teacher._id
        });

        await course.save();
        console.log("Referenced Course Record Created");

    } catch (err) {
        console.error("Error:", err);
    } finally {
        mongoose.disconnect();
    }
}