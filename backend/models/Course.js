const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: String,
    priority: Number,
    numberOfStudents: Number,
    assignedHall: { type: mongoose.Schema.Types.ObjectId, ref: 'Hall' },
    timeSlot: { type: mongoose.Schema.Types.ObjectId, ref: 'TimeSlot' }
});

module.exports = mongoose.model('Course', CourseSchema);