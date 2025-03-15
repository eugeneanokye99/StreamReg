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


// Register for a workshop
router.post('/', async (req, res) => {
    try {
        const { userId, workshopId, name, email, phone } = req.body;

        // Check if the user is already registered
        const existingRegistration = await Registration.findOne({ userId, workshopId });
        if (existingRegistration) {
            return res.status(400).json({ message: "You are already registered for this workshop." });
        }

        // Create new registration
        const registration = new Registration({
            userId,
            workshopId,
            name,  
            email,  
            phone,  
            status: "pending", // Default status
            paymentStatus: "pending"
        });

        await registration.save();
        res.status(201).json({ message: "Registered successfully!", registration });

    } catch (error) {
        console.error("Error registering for workshop:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});


// Get registrations for admin
router.get('/admin', async (req, res) => {
    const registrations = await Registration.find().populate('userId workshopId');
    res.json(registrations);
});

module.exports = router;
