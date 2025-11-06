const data = require("../localData");

const userController = {
    perfil: function (req, res) {
        return res.render("profile", {
            usuario: data.usuario,
            productos: data.productos
        });
    }
};

module.exports = userController;