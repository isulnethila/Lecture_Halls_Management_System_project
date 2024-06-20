const express = require('express');
const router = express.Router();
const TimeSlot = require('../models/timeSlot');

router.post('/add', async (req, res) => {
    const timeSlot = new TimeSlot(req.body);
    await timeSlot.save();
    res.send(timeSlot);
});

router.get('/', async (req, res) => {
    const timeSlots = await TimeSlot.find();
    res.send(timeSlots);
});

module.exports = router;