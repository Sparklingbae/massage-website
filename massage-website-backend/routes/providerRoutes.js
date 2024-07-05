const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');
const upload = require('../middleware/upload');

// Define routes for provider signup
router.post('/signup', upload.array('images', 10), providerController.signup);

module.exports = router;