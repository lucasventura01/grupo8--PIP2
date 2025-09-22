const data = require("../localData");

const userController = {
    perfil: function (req, res) {
        return res.render("profile", {usuario: data.usuario});
    }
};

module.exports = userController;