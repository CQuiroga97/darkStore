const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js")

const usuario = sequelize.define('usuario', {
    id_usuario: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    clave: DataTypes.STRING,
    activo: DataTypes.BOOLEAN,
},{
    timestamps: false
})

module.exports = usuario;