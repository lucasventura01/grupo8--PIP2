const dataPerfumes = require("../localData");

const productosController = {
    listado: function (req, res) {
        res.render("products", { productos: dataPerfumes.productos });
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
        var resultados = [];
        for (var i = 0; i < 4; i++) {
            resultados.push(dataPerfumes.productos[i]);
        }
        res.render("search-results", { resultados: resultados });
    }
};

module.exports = productosController;
