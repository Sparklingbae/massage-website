const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialty: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String, required: true },
    services: { type: String, required: true },
    location: { type: String, required: true },
    images: { type: [String] }, // Array of image paths
    paymentReference: { type: String, required: true }
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;