const express = require('express');
const router = express.Router();
const DoctorController = require('../controllers/DoctorController');

// Routes for doctors
router.get('/', DoctorController.getAllDoctors);
router.post('/', DoctorController.createDoctor);
router.put('/:id', DoctorController.updateDoctor);
router.delete('/:id', DoctorController.deleteDoctor);

module.exports = router;
