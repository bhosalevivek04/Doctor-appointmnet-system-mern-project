// Assuming DeviceData is the model for device data entities
const DeviceData = require('../models/deviceDataModel');

class DeviceDataService {
  async getAllDeviceData() {
    try {
      const deviceData = await DeviceData.find();
      return deviceData;
    } catch (error) {
      throw new Error('Error while fetching device data');
    }
  }

  async createDeviceData(data) {
    try {
      const newDeviceData = new DeviceData(data);
      const savedDeviceData = await newDeviceData.save();
      return savedDeviceData;
    } catch (error) {
      throw new Error('Error while creating device data');
    }
  }

  // Add other CRUD operations as needed
}

module.exports = new DeviceDataService();
