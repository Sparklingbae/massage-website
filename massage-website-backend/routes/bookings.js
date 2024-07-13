// routes/bookings.js

const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); // Assuming you have a Booking model

router.post('/', async (req, res) => {
    const { name, email, service, date, time, address } = req.body;

    try {
        const newBooking = new Booking({
            name,
            email,
            service,
            date,
            time,
            address
        });

        const savedBooking = await newBooking.save(); // Ensure this function is async
        res.status(201).json(savedBooking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;