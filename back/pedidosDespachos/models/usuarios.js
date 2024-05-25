const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js");
const detalles_pedidos = require('./detallesPedidos.js');

const usuarios = sequelize.define('usuarios', {
    id_usuario: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    clave: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
},{
    timestamps: false 
})

module.exports = usuarios;