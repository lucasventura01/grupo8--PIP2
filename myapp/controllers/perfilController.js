const data = require("../localData");
const db = require("../database/models");
const perfilController = {
    perfil: function (req, res) {
        if (!req.session.user) {
            return res.redirect("/users/login");
        }

        db.User.findByPk(req.session.user.id, {
            include: [{ association: "products" }]
        })
            .then(function (usuario) {
                if (usuario == undefined) {
                    return res.redirect("/users/login");
                }

                let productos = [];

                if (usuario.products && usuario.products.length > 0) {
                    productos = usuario.products;
                }
                return res.render("profile", {
                    usuario: usuario,
                    productos: productos,
                    cantidad: productos.length
                });
            })
            .catch(function (error) {
                console.log(error);
                return res.status(500).send(error);
            });
    }
};

module.exports = perfilController;