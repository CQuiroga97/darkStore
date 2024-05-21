const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js")
const productos = require("./productos.js")
const ubicacion = require("./ubicaciones.js")
const ubicacion_productos = sequelize.define('ubicacion_productos', {
    id_ubicacion_producto: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    ubicacion_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
},{
    timestamps: false 
})
ubicacion_productos.belongsTo(productos, {foreignKey:'producto_id'});
ubicacion_productos.belongsTo(ubicacion, {foreignKey:'ubicacion_id'});
module.exports = ubicacion_productos;