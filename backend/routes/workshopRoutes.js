const express = require('express');
const Workshop = require('../models/Workshop');

const router = express.Router();

// Get all workshops
router.get('/', async (req, res) => {
    const workshops = await Workshop.find();
    res.json(workshops);
});

// Add a new workshop (Admin only)
router.post('/', async (req, res) => {
    try {
        const workshop = new Workshop(req.body);
        await workshop.save();
        res.status(201).json(workshop);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
