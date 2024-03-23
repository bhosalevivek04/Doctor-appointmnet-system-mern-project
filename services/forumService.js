// Assuming Forum is the model for forum entities
const Forum = require('../models/forumModel');

class ForumService {
  async getAllPosts() {
    try {
      const posts = await Forum.find();
      return posts;
    } catch (error) {
      throw new Error('Error while fetching forum posts');
    }
  }

  async createPost(data) {
    try {
      const newPost = new Forum(data);
      const savedPost = await newPost.save();
      return savedPost;
    } catch (error) {
      throw new Error('Error while creating forum post');
    }
  }

  // Add other CRUD operations as needed
}

module.exports = new ForumService();
