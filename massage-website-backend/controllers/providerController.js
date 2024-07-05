const Provider = require('../models/provider');

// Controller function for provider signup
exports.signup = async (req, res) => {
    try {
        // Destructure fields from the request body
        const { name, email, specialty, password, bio, services, location, paymentReference } = req.body;

        // Validate that required fields are present
        if (!name || !email || !specialty || !password || !bio || !services || !location || !paymentReference) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Handle file uploads
        const images = req.files ? req.files.map(file => file.path) : [];

        // Create a new provider instance
        const newProvider = new Provider({
            name,
            email,
            specialty,
            password,
            bio,
            services,
            location,
            images,
            paymentReference
        });

        // Save the provider instance to the database
        await newProvider.save();

        // Send a success response
        res.status(201).json({ message: 'Provider registered successfully' });
    } catch (error) {
        // Send an error response
        res.status(400).json({ error: error.message });
    }
};