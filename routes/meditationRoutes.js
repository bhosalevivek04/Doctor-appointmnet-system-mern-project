const express = require('express');
const router = express.Router();
const Meditation = require('../models/meditationModel');

// Get all meditations
router.get('/', async (req, res) => {
  try {
    const meditations = await Meditation.find();
    res.json(meditations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new meditation
router.post('/', async (req, res) => {
  const meditation = new Meditation({
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
  });

  try {
    const newMeditation = await meditation.save();
    res.status(201).json(newMeditation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
