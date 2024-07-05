require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const providerRoutes = require('./routes/providerRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const path = require('path');
const Booking = require('./models/Booking');

const app = express();

// Log environment variable to debug
console.log('MONGODB_URI:', process.env.MONGODB_URI);

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

// Allow requests from frontend domain
app.use(cors({
    origin: 'http://localhost:3000',  // Replace with your frontend URL
    credentials: true,  // Enable credentials (cookies, authorization headers)
}));

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/payment', paymentRoutes);

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Endpoint to receive payment notification
app.post('/api/booking/notify', async (req, res) => {
    const { name, email, transactionReference } = req.body;

    // Save booking details to the database
    const newBooking = new Booking({ name, email, transactionReference });

    try {
        await newBooking.save();
        res.status(200).send('Notification received and booking saved');
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).send('Error saving booking');
    }
});

// Endpoint to handle WhatsApp redirection
app.get('/api/whatsapp', (req, res) => {
    const { whatsappNumber, message } = req.query;

    // Construct WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    res.redirect(whatsappURL);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));