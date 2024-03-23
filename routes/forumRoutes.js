const express = require('express');
const router = express.Router();
const ForumController = require('../controllers/ForumController');

// Routes for forum
router.get('/posts', ForumController.getAllPosts);
router.post('/posts', ForumController.createPost);
router.put('/posts/:id', ForumController.updatePost);
router.delete('/posts/:id', ForumController.deletePost);

module.exports = router;
