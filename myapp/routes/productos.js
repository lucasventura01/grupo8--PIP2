const express = require('express');
const router = express.Router();
const prodController = require('../controllers/productosController.js');

router.get('/add', prodController.agregar);
router.get('/edit/:idProducto', prodController.editar);
router.get('/search', prodController.buscar);

router.get('/', prodController.listado);
router.get('/:idProducto', prodController.detalle);

module.exports = router;
