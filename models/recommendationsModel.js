const mongoose = require('mongoose');

const recommendationsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  recommendations: {
    type: [String],
    required: true,
  },
});

const Recommendations = mongoose.model('Recommendations', recommendationsSchema);

module.exports = Recommendations;
