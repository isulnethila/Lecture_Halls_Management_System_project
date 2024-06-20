const express = require('express');
const router = express.Router();
const Hall = require('../models/Hall');

router.post('/add', async (req, res) => {
    const hall = new Hall(req.body);
    await hall.save();
    res.send(hall);
});

router.get('/', async (req, res) => {
    const halls = await Hall.find();
    res.send(halls);
});

module.exports = router;