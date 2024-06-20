const mongoose = require('mongoose');

const TimeSlotSchema = new mongoose.Schema({
    startTime: Date,
    endTime: Date,
    isAvailable: Boolean
});

module.exports = mongoose.model('TimeSlot', TimeSlotSchema);
