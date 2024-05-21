const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js")

const ubicaciones = sequelize.define('ubicaciones', {
    id_ubicacion: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    estan: DataTypes.STRING,
    columna: DataTypes.STRING,
    nivel: DataTypes.INTEGER,
    categoria_producto_id: DataTypes.INTEGER,
},{
    timestamps: false 
})

module.exports = ubicaciones;