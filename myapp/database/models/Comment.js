module.exports = function(sequelize, dataTypes){

    let alias = "Comment";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_producto: {
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        comentario: {
            type: dataTypes.TEXT
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        }
    }
    
    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    }
    const Comment = sequelize.define(alias, cols, config);
    
    Comment.associate = function(models){
        Comment.belongsTo(models.Product, {
            as: "product",
            foreignKey: "id_producto"
        })
        Comment.belongsTo(models.User, {
            as: "user",
            foreignKey: "id_usuario"
        })
    }
    return Comment;
}