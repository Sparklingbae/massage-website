// server.js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const bookingsRouter = require('./routes/bookings'); // Adjust route paths as per your project structure
const bookingNotifyRouter = require('./routes/bookingNotify');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

app.post('/api/booking/notify', (req, res) => {
    console.log('Received request at /api/booking/notify', req.body);
    res.status(200).send('Notification received');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Deprecated and has no effect
    useUnifiedTopology: true, // Deprecated and has no effect
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Booking route
app.use('/api/bookings', bookingsRouter); // Example route setup for bookings
app.use('/api/booking', bookingNotifyRouter); // Example route setup for booking notifications

app.get('/endpoint', (req, res) => {
    res.send('Hello from backend!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));