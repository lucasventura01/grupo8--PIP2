module.exports = function(sequelize, dataTypes){

    let alias = "Product";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        nombre_archivo: {
            type: dataTypes.STRING,
        },
        nombre_producto: {
            type: dataTypes.STRING,
        },
        descripcion_producto: {
            type: dataTypes.TEXT
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        }
    }

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.User, {
            as: "user",
            foreignKey: "id_usuario"
        })
        Product.hasMany(models.Comment, {
            as: "comment",
            foreignKey: "id_producto"
        })
        
    }
    return Product;
}
