const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController.js');


router.get('/:idProducto', productosController.detalle);

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios );


module.exports = router;