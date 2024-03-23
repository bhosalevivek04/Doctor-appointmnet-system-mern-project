// Assuming GoalSetting is the model for goal setting entities
const GoalSetting = require('../models/goalSettingModel');

class GoalSettingService {
  async getAllGoals() {
    try {
      const goals = await GoalSetting.find();
      return goals;
    } catch (error) {
      throw new Error('Error while fetching goals');
    }
  }

  async createGoal(data) {
    try {
      const newGoal = new GoalSetting(data);
      const savedGoal = await newGoal.save();
      return savedGoal;
    } catch (error) {
      throw new Error('Error while creating goal');
    }
  }

  // Add other CRUD operations as needed
}

module.exports = new GoalSettingService();
