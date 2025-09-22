const dataPerfumes = require("../localData");

const mainController = {
    index: function (req, res) {
        res.render("index", { productos: dataPerfumes.productos });
    }
};

module.exports = mainController;