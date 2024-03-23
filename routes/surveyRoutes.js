const express = require('express');
const router = express.Router();
const Survey = require('../models/surveyModel');

// Get all surveys
router.get('/', async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new survey
router.post('/', async (req, res) => {
  const survey = new Survey({
    question: req.body.question,
    options: req.body.options,
  });

  try {
    const newSurvey = await survey.save();
    res.status(201).json(newSurvey);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
