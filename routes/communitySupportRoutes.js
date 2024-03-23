const express = require('express');
const router = express.Router();
const CommunitySupportController = require('../controllers/CommunitySupportController');

// Routes for community support
router.get('/posts', CommunitySupportController.getAllPosts);
router.post('/posts', CommunitySupportController.createPost);
router.put('/posts/:id', CommunitySupportController.updatePost);
router.delete('/posts/:id', CommunitySupportController.deletePost);

module.exports = router;
