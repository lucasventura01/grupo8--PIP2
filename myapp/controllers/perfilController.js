const data = require("../localData");
const db = require("../database/models");

const perfilController = {
    perfil: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect("/users/login");
        }

        db.User.findByPk(req.session.user.id, {
            include: [{ association: "productos" }]
        })
        .then(function(usuario) {
            let cantidadProductos = usuario.productos.length;

            return res.render("profile", {
                usuario: usuario,
                productos: usuario.productos,
                cantidad: cantidadProductos
            });
        })
        .catch(function(error) {
            return res.send(error);
        });
    }
};

module.exports = perfilController;