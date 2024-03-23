const express = require('express');
const router = express.Router();
const GoalSettingController = require('../controllers/GoalSettingController');

// Routes for goal setting
router.get('/goals', GoalSettingController.getAllGoals);
router.post('/goals', GoalSettingController.createGoal);
router.put('/goals/:id', GoalSettingController.updateGoal);
router.delete('/goals/:id', GoalSettingController.deleteGoal);

module.exports = router;
