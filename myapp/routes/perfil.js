const express = require('express');
const router = express.Router();
const usuarios = require('../controllers/perfilController.js');

router.get('/', usuarios.perfil);

module.exports = router;
