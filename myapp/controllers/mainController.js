//const dataPerfumes = require("../localData");
const db = require("../database/models");
const op = db.Sequelize.Op;

const mainController = {
    index: function (req, res) {
        db.Product.findAll({
            include: [{association: "user"}, {association: "comment"}],
        })
        .then(function (products) {
            res.render('index', {productos: products});
        })
        .catch(function (error) {
            res.send(error);
        });

    },

    search: function (req, res) {
        let criterio = req.query.search;
        db.Product.findAll({
            where: {
                nombre_producto: { [op.like]: `%${criterio}%` },
                include: [{ association: "user" }, { association: "comment", include: [{ association: "user" }] }]
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

module.exports = mainController;