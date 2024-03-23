const express = require('express');
const router = express.Router();
const DataVisualizationController = require('../controllers/DataVisualizationController');

// Routes for data visualization
router.get('/data', DataVisualizationController.getData);
router.post('/data', DataVisualizationController.createData);
router.put('/data/:id', DataVisualizationController.updateData);
router.delete('/data/:id', DataVisualizationController.deleteData);

module.exports = router;
