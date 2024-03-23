// Assuming DoctorList is the model for doctor list entities
const DoctorList = require('../models/doctorListModel');

class DoctorListService {
  async getAllDoctors() {
    try {
      const doctors = await DoctorList.find();
      return doctors;
    } catch (error) {
      throw new Error('Error while fetching doctors');
    }
  }

  async createDoctor(data) {
    try {
      const newDoctor = new DoctorList(data);
      const savedDoctor = await newDoctor.save();
      return savedDoctor;
    } catch (error) {
      throw new Error('Error while creating doctor');
    }
  }

  // Add other CRUD operations as needed
}

module.exports = new DoctorListService();
