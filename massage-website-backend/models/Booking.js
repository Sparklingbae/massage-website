// models/Booking.js

const mongoose = require('mongoose');

// Define booking schema
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    address: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create model from schema
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;