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

module.exports = router;