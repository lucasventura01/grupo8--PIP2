const dataPerfumes = require("../localData");
let db = require("../database/models");
let op = db.Sequelize.Op;

const productosController = {
    index: function (req, res) {
        db.Product.findAll()
            .then(function (products) {
                return res.render("products", { products: products });
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    show: function (req, res) {
        db.Product.findByPk(req.params.idProducto, {
            include: [{ association: "user" }, { association: "comment", include: [{ association: "user" }] }]
        })
            .then(function (product) {
                return res.render("product", { product: product });
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    agregar: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect('/users/login');
        }
        res.render("product-add", { usuario: req.session.user });
    },
    guardar: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect('/users/login');
        }
        let nuevoProducto = {
            userId: req.session.user.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
        };
        db.Product.create(nuevoProducto)
            .then(function () {
                return res.redirect('/');
            })
            .catch(function (error) {
                return res.render("product-add", { usuario: req.session.user, error: error });
            });
    },

    editar: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect('/users/login');
        }
        const id = req.params.idProducto;
        const producto = dataPerfumes.productos[id];
        res.render("product-edit", { producto, idProducto: id });
    },
    comentar: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect('/users/login');
        }
        let nuevoComentario = {
            id_usuario: req.session.user.id,
            id_producto: req.params.idProducto,
            comentario: req.body.comentario,
        };
        db.Comment.create(nuevoComentario)
            .then(function () {
                return res.redirect('/productos/' + req.params.idProducto);
            }
            )
            .catch(function (error) {
                return res.send(error);
            });
    },

    search: function (req, res) {
        let criterio = req.query.search;
        db.Product.findAll({
            where: {
                title: { [op.like]: `%${criterio}%` }
            }
        })
            .then(function (products) {
                return res.render("search-results", { products: products, criterio: criterio });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

module.exports = productosController;
