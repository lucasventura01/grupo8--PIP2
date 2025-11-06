let db = require("../database/models");
let bcrypt = require('bcryptjs');

let uController = {
    show: function(req, res) {
        // Mostrar formulario de registro
        if (req.session && req.session.user) {
            return res.redirect("/");
        }
        return res.render("register");
    },

    create: function(req, res) {
        // Crear usuario nuevo - hashear contraseña
        let userData = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            name: req.body.name
        };

        db.User.create(userData)
            .then(function() {
                return res.redirect("/");
            })
            .catch(function(error) {
                return res.send(error);
            });
    },

    login: function(req, res) {
        // Mostrar formulario de login
        if (req.session && req.session.user) {
            return res.redirect("/");
        }
        return res.render("login");
    },

    processLogin: function(req, res) {
        // Procesar login y crear sesión + cookie (opcional)
        db.User.findOne({
            where: { email: req.body.email }
        })
        .then(function(user) {
            if (user && bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    name: user.name
                };

                if (req.body.recordarme) {
                    res.cookie("user", {
                        id: user.id,
                        email: user.email,
                        name: user.name
                    }, { maxAge: 1000 * 60 * 10 });
                }

                return res.redirect("/");
            } else {
                return res.send("Credenciales inválidas");
            }
        })
        .catch(function(error) {
            return res.send(error);
        });
    },

    logout: function(req, res) {
        //Procesamos el logout destruyendo la sesión y eliminando la cookie.
        req.session.destroy();
        res.clearCookie("user");
        res.redirect("/");
    }
};

module.exports = uController;
