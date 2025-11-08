let db = require("../database/models");
let bcrypt = require('bcryptjs');

let uController = {
    show: function(req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/');
        } else {
            return res.render('register');
        }
    },

    create: function(req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/");
        }
        if (!req.body.email || !req.body.password || !req.body.name) {
            return res.send("Todos los campos son obligatorios");
        }db.User.findOne({
            where: { email: req.body.email }
        })
        .then(function(user) {
            if (user) {
                return res.send("El email ya está registrado");
            } else {
                let userData = {
                    name: req.body.name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10)
                };
    
                db.User.create(userData)
                    .then(function() {
                        return res.redirect("/");
                    })
                    .catch(function(error) {
                        return res.send(error);
                    });
            }
        })
        .catch(function(error) {
            return res.send(error);
        });
    },

    login: function(req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/");
        } else {
            return res.render("login");
        }
    },

    processLogin: function(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.send("Debes completar todos los campos!");
        }


        db.User.findOne({
            where: { email: req.body.email }
        })
        .then(function(user) {
            if (!user) {
                return res.send('El email ingresado no está registrado');
            }

            if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    name: user.name
                };

                if (req.body.recordarme != undefined) {
                    res.cookie("user", {
                        id: user.id,
                        email: user.email,
                        name: user.name
                    }, { maxAge: 1000 * 60 * 10 });
                }

                return res.redirect("/");
            } else {
                return res.send("Contraseña incorrecta");
            }
        })
        .catch(function(error) {
            return res.send(error);
        });
    },

    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie("user");
        res.redirect("/");
    }
};

module.exports = uController;
