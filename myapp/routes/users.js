var express = require('express');
var router = express.Router();
const usuarios = require('../controllers/userController.js');

router.get('/profile', usuarios.perfil);

module.exports = router;
