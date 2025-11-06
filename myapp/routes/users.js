// routes/users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/uController');

router.get('/register', usersController.show);         // Form registro
router.post('/newuser', usersController.create);       // Alta de usuario

router.get('/login', usersController.login);           // Form login
router.post('/processLogin', usersController.processLogin); // Procesa login
router.get('/logout', usersController.logout);
router.post('/logout', usersController.logout);
module.exports = router;
