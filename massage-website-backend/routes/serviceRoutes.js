const express = require('express');
const { createService, getServices, getServiceById, updateService, deleteService } = require('../controllers/serviceController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// @route   POST api/services
// @desc    Create a service
// @access  Private
router.post('/', auth, createService);

// @route   GET api/services
// @desc    Get all services
// @access  Public
router.get('/', getServices);

// @route   GET api/services/:id
// @desc    Get service by ID
// @access  Public
router.get('/:id', getServiceById);

// @route   PUT api/services/:id
// @desc    Update a service
// @access  Private
router.put('/:id', auth, updateService);

// @route   DELETE api/services/:id
// @desc    Delete a service
// @access  Private
router.delete('/:id', auth, deleteService);

module.exports = router;