const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js")

const clientes = sequelize.define('clientes', {
    id_cliente: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    tipo_documento: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
},{
    timestamps: false 
})

module.exports = clientes;