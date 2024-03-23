// Assuming CommunitySupport is the model for community support entities
const CommunitySupport = require('../models/communitySupportModel');

class CommunitySupportService {
  async getAllCommunitySupport() {
    try {
      const communitySupport = await CommunitySupport.find();
      return communitySupport;
    } catch (error) {
      throw new Error('Error while fetching community support data');
    }
  }

  async createCommunitySupport(data) {
    try {
      const newCommunitySupport = new CommunitySupport(data);
      const savedCommunitySupport = await newCommunitySupport.save();
      return savedCommunitySupport;
    } catch (error) {
      throw new Error('Error while creating community support');
    }
  }

  // Add other CRUD operations as needed
}

module.exports = new CommunitySupportService();
