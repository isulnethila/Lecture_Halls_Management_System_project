const mongoose = require('mongoose');

const HallSchema = new mongoose.Schema({
    name: String,
    capacity: Number,
    facilities: [String]
});

module.exports = mongoose.model('Hall', HallSchema);