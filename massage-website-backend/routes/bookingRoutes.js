const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings
router.post('/bookings', async (req, res) => {
    const { name, email, service, date, time, address, transactionReference } = req.body;

    try {
        const newBooking = new Booking({
            name,
            email,
            service,
            date,
            time,
            address,
            transactionReference
        });

        await newBooking.save();

        res.status(201).json(newBooking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Endpoint to receive payment notification
router.post('/booking/notify', async (req, res) => {
    const { name, email, service, date, time, address, transactionReference } = req.body;

    try {
        const newBooking = new Booking({
            name,
            email,
            service,
            date,
            time,
            address,
            transactionReference
        });

        await newBooking.save();

        res.status(201).json(newBooking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;