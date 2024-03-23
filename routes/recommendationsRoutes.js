const express = require('express');
const router = express.Router();
const Recommendations = require('../models/recommendationsModel');

// Get all recommendations
router.get('/', async (req, res) => {
  try {
    const recommendations = await Recommendations.find();
    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new recommendation
router.post('/', async (req, res) => {
  const recommendations = new Recommendations({
    category: req.body.category,
    recommendations: req.body.recommendations,
  });

  try {
    const newRecommendations = await recommendations.save();
    res.status(201).json(newRecommendations);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
