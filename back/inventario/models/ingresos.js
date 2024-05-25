const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js")

const ingresos = sequelize.define('ingresos', {
    id_ingreso: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    fecha_ingreso: DataTypes.DATE,
    codigo_ingreso: DataTypes.STRING,
    marca_id: DataTypes.INTEGER,
    usuario_marca_id: DataTypes.INTEGER,
    usuario_interno_id: DataTypes.INTEGER,
    estado: DataTypes.STRING,
},{
    timestamps: false 
})

module.exports = ingresos;