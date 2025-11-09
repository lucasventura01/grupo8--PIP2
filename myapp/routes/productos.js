const express = require('express');
const router = express.Router();
const prodController = require('../controllers/productosController.js');

router.get('/add', prodController.agregar);
router.post('/add', prodController.guardar);
router.post('/:idProducto/comment', prodController.comentar);
router.get('/edit/:idProducto', prodController.editar);
router.get('/search', prodController.search);
router.get('/', prodController.index);
router.get('/:idProducto', prodController.show);


module.exports = router;
