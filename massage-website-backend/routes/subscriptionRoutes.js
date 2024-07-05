const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

// POST /api/subscribe
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    let subscription = await Subscription.findOne({ email });

    if (subscription) {
      return res.status(400).json({ msg: 'Email is already subscribed' });
    }

    subscription = new Subscription({ email });

    await subscription.save();

    res.status(201).json({ msg: 'Subscription successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;