const express = require('express');
const Registration = require('../models/Registration');

const router = express.Router();

// Register for a workshop
router.post('/', async (req, res) => {
    const { userId, workshopId } = req.body;
    const registration = new Registration({ userId, workshopId });
    await registration.save();
    res.status(201).json({ message: "Registered successfully!" });
});

// Get registrations for admin
router.get('/admin', async (req, res) => {
    const registrations = await Registration.find().populate('userId workshopId');
    res.json(registrations);
});

module.exports = router;
