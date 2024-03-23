const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/admin/UsersController');
const DoctorsController = require('../controllers/admin/DoctorsController');

// Routes for admin users
router.get('/users', UsersController.getAllUsers);
router.post('/users', UsersController.createUser);
router.put('/users/:id', UsersController.updateUser);
router.delete('/users/:id', UsersController.deleteUser);

// Routes for admin doctors
router.get('/doctors', DoctorsController.getAllDoctors);
router.post('/doctors', DoctorsController.createDoctor);
router.put('/doctors/:id', DoctorsController.updateDoctor);
router.delete('/doctors/:id', DoctorsController.deleteDoctor);

module.exports = router;
