var express = require('express');
var router = express.Router();
const usuarios = require('../controllers/perfilController.js');

router.get('/', usuarios.perfil);

module.exports = router;
