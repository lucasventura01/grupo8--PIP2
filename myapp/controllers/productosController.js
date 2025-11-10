const dataPerfumes = require("../localData");
let db = require("../database/models");
let op = db.Sequelize.Op;

const productosController = {

    show: function (req, res) {
        db.Product.findByPk(req.params.idProducto, {
            include: [{ association: "user" }, { association: "comment", include: [{ association: "user" }] }]
        })
            .then(function (product) {
                return res.render("product", { product: product, idProducto: req.params.idProducto });
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
            id_usuario: req.session.user.id,
            nombre_producto: req.body.nombre,
            descripcion_producto: req.body.descripcion,
            //falta ver imagen
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
        if (!req.session.usuarioLogueado) {
            return res.redirect('/profile/login');
        }

        const product_id = req.params.idProducto;
        const user_id = req.session.usuarioLogueado.id;
        const texto = req.body.comentario;

        if (!texto) {
            return res.redirect(`/products/${product_id}`);
        }

        db.Comentarios.create({
            id_producto: product_id,
            id_usuario: user_id,
            comentario: texto
        })
        .then(function () {
            res.redirect(`/products/${product_id}`);
        })
        .catch(function (error) {
            console.error('Error al crear el comentario:', error);
            res.redirect(`/products/${product_id}`);
        });
    },
};

module.exports = productosController;
