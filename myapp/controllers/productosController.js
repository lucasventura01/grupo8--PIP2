const dataPerfumes = require("../localData");


const productosController = {
    listado: function (req, res) {
        return res.render("index");
    },
    detalle: function (req, res) {
        const productoEj = dataPerfumes.productos[0];
        return res.render("product", { id: req.params.id }, { producto: productoEj });
    },
    agregar: function (req, res) {
        return res.render("product-add");
    },
    editar: function (req, res) {
        return res.render("product-edit", { id: req.params.id });
    },
    buscar: function (req, res) {
        return res.render("search-results");
    }
};

module.exports = productosController;


