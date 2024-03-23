const express = require('express');
const router = express.Router();
const DoctorListController = require('../controllers/DoctorListController');

// Routes for doctor list
router.get('/doctors', DoctorListController.getAllDoctors);
router.get('/doctors/:id', DoctorListController.getDoctorById);

module.exports = router;
