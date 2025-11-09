let db = require("../database/models");
let bcrypt = require('bcryptjs');

let uController = {
    show: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/');
        } else {
            return res.render('register');
        }
    },

    create: function (req, res) {

        let userData = {
            nombre_usuario: req.body.name,
            email: req.body.email,
            contraseña: bcrypt.hashSync(req.body.password, 10)
        };

        db.User.create(userData)
            .then(function () {
                return res.redirect("/");
            })
            .catch(function (error) {
                return res.send(error);
            });

    },

    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/");
        } else {
            return res.render("login");
        }
    },

    processLogin: function (req, res) {
        db.User.findOne({
            where: { email: req.body.email }
        })
            .then(function (user) {
                if (!user) {
                    return res.send('El email ingresado no está registrado');
                }

                if (bcrypt.compareSync(req.body.password, user.contraseña)) {
                    req.session.user = {
                        id: user.id,
                        email: user.email,
                        nombre_usuario: user.nombre_usuario
                    };

                    if (req.body.recordarme != undefined) {
                        res.cookie("user", {
                            id: user.id,
                            email: user.email,
                            nombre_usuario: user.nombre_usuario
                        }, { maxAge: 1000 * 60 * 10 });
                    }

                    return res.redirect("/");
                } else {
                    return res.send("Contraseña incorrecta");
                }
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("user");
        res.redirect("/");
    }
};

module.exports = uController;
