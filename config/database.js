// database.js

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/mental-health-db';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

module.exports = connectDB;
