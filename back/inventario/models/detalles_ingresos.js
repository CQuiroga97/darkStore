const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js")
const productos = require("./productos.js")
const ingresos = require("./ingresos.js")
const detalles_ingresos = sequelize.define('detalles_ingresos', {
    id_detalle_ingreso: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    fecha_ingreso: DataTypes.DATE,
    ingreso_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
},{
    timestamps: false 
})
detalles_ingresos.belongsTo(productos, {foreignKey:'producto_id'});
detalles_ingresos.belongsTo(ingresos, {foreignKey:'ingreso_id'});
module.exports = detalles_ingresos;