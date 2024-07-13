// routes/bookingNotify.js
const express = require('express');
const router = express.Router();

// POST notification handler
router.post('/notify', async (req, res) => {
    console.log('Received notification:', req.body);

    try {
        // Process notification logic (e.g., send email, update database)
        res.status(200).json({ message: 'Notification received and processed.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;