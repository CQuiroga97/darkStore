const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js")

const productos = sequelize.define('productos', {
    id_producto: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    referencia: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    marca_id: DataTypes.INTEGER,
    categoria_producto_id: DataTypes.INTEGER,
},{
    timestamps: false 
})

module.exports = productos;