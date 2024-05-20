const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js")

const marca = sequelize.define('marca', {
    id_marca: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    activo: DataTypes.BOOLEAN,
},{
    timestamps: false 
})

module.exports = marca;