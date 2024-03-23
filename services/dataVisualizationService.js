// Assuming DataVisualization is the model for data visualization entities
const DataVisualization = require('../models/dataVisualizationModel');

class DataVisualizationService {
  async getAllDataVisualization() {
    try {
      const dataVisualization = await DataVisualization.find();
      return dataVisualization;
    } catch (error) {
      throw new Error('Error while fetching data visualization data');
    }
  }

  async createDataVisualization(data) {
    try {
      const newDataVisualization = new DataVisualization(data);
      const savedDataVisualization = await newDataVisualization.save();
      return savedDataVisualization;
    } catch (error) {
      throw new Error('Error while creating data visualization');
    }
  }

  // Add other CRUD operations as needed
}

module.exports = new DataVisualizationService();
