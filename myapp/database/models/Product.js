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
        tablename: "products",
        timestamps: true,
        underscore: true
    }

    const Product = sequelize.define(alias, cols, config);

    return Product;
}
