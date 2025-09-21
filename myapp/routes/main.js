const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Bienvenidos al sitio!!!!!');
});

router.get('/contacto', function(req, res) {
  res.send('Dejanos tu contacto!');
});

module.exports = router;
