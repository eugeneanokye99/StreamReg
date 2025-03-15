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

// Get a single workshop by ID
router.get("/:id", async (req, res) => {
    try {
        const workshop = await Workshop.findById(req.params.id);
        if (!workshop) {
            return res.status(404).json({ message: "Workshop not found" });
        }
        res.status(200).json(workshop);
    } catch (error) {
        res.status(500).json({ message: "Error fetching workshop", error: error.message });
    }
});

// Update a workshop by ID (Admin only)
router.put("/:id", async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workshop) {
            return res.status(404).json({ message: "Workshop not found" });
        }
        res.status(200).json({ message: "Workshop updated", workshop });
    } catch (error) {
        res.status(500).json({ message: "Error updating workshop", error: error.message });
    }
});


// Delete a workshop by ID (Admin only)
router.delete("/:id", async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndDelete(req.params.id);
        if (!workshop) {
            return res.status(404).json({ message: "Workshop not found" });
        }
        res.status(200).json({ message: "Workshop deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting workshop", error: error.message });
    }
});

module.exports = router;
