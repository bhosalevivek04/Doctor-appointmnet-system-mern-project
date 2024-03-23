const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
