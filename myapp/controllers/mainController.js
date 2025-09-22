const dataPerfumes = require("../localData");

const mainController = {
    index: function (req, res) {
        res.render("index", {title: 'Sillage',  productos: dataPerfumes.productos });
    },
    profile: function (req, res) {
        res.render('profile', {usuario: dataPerfumes.usuario});
      }
};

module.exports = mainController;