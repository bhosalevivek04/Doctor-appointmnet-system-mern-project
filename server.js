// server.js

const express = require('express');
const connectDB = require('./config/database');
const surveyRoutes = require('./routes/surveyRoutes');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Suppress Mongoose deprecation warning
mongoose.set('strictQuery', false);

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/survey', surveyRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
