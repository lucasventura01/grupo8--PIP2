const dataPerfumes = require("../localData");


const productosController = {
    listado: function (req, res) {
        return res.render("index");
    },
    detalle: function (req, res) {
        const productoEj = dataPerfumes.productos[0];
        return res.render("product", { producto: productoEj });
    },
    agregar: function (req, res) {
        return res.render("product_add");
    },
    editar: function (req, res) {
        return res.render("product_edit");
    },
    buscar: function (req, res) {
        return res.render("search_results");
    }
};

module.exports = productosController;


