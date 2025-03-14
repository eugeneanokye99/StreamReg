const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    price: Number,
    seatsAvailable: Number
});

module.exports = mongoose.model("Workshop", WorkshopSchema);
