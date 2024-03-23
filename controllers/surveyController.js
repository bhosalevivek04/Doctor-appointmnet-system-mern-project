// surveyController.js
const Survey = require('../models/surveyModel');

const submitSurvey = async (req, res) => {
  try {
    const { userId, answers } = req.body;
    const survey = new Survey({ userId, answers });
    await survey.save();
    res.status(201).json({ success: true, message: 'Survey submitted successfully' });
  } catch (error) {
    console.error('Error submitting survey:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

module.exports = { submitSurvey };
