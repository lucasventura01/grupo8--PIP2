module.exports = function (sequelize, dataTypes){

    let alias = 'User'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        },
        foto_perfil: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
        nombre_usuario: {
            type: dataTypes.STRING
        },
        remember_token: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName : "usuarios",
        timestamps: true,
        underscored: false,
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_usuario"
        })
        User.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "id_usuario"
        })
    }

    return User;

}