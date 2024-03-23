const express = require('express');
const router = express.Router();
const DeviceDataController = require('../controllers/DeviceDataController');

// Routes for device data
router.get('/data', DeviceDataController.getData);
router.post('/data', DeviceDataController.createData);
router.put('/data/:id', DeviceDataController.updateData);
router.delete('/data/:id', DeviceDataController.deleteData);

module.exports = router;
