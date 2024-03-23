const express = require('express');
const router = express.Router();
const Notification = require('../models/notificationModel');

// Get all notifications
router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new notification
router.post('/', async (req, res) => {
  const notification = new Notification({
    message: req.body.message,
    userId: req.body.userId,
  });

  try {
    const newNotification = await notification.save();
    res.status(201).json(newNotification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
