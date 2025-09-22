const dataPerfumes = require("../localData");

const productosController = {
  listado: function (req, res) {
    res.render("index", { productos: dataPerfumes.productos });
  },
  detalle: function (req, res) {
    const id = req.params.idProducto;            
    const producto = dataPerfumes.productos[id];
    res.render("product", { producto, idProducto: id });
  },
  agregar: function (req, res) {
    res.render("product-add");     
  },
  editar: function (req, res) {
    const id = req.params.idProducto;               
    const producto = dataPerfumes.productos[id];
    res.render("product-edit", { producto, idProducto: id }); 
  },
  buscar: function (req, res) {
    res.render("search-results");
  }
};

module.exports = productosController;
