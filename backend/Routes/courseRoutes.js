const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.post('/add', async (req, res) => {
    const course = new Course(req.body);
    await course.save();
    res.send(course);
});

router.get('/', async (req, res) => {
    const courses = await Course.find().populate('assignedHall').populate('timeSlot');
    res.send(courses);
});

router.delete('/:id', async (req, res) => {
    const courseId = req.params.id;
    const {name, priority,numberOfStudents,assignedHall,timeSlot}=req.body

    try {
        const deletedCourse = await Course.findByIdAndDelete({name, priority,numberOfStudents,assignedHall,timeSlot});
        if (!deletedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
