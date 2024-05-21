const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js")

const despachos = sequelize.define('despachos', {
    id_despacho: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    fecha_despacho: DataTypes.DATE,
    codigo_despacho: DataTypes.STRING,
    marca_id: DataTypes.INTEGER,
    transportadora: DataTypes.STRING,
    numero_guia: DataTypes.STRING,
    cantidad_productos: DataTypes.INTEGER,
    cantidad_embalaje: DataTypes.INTEGER,
    usuario_interno_id: DataTypes.INTEGER,
    estado: DataTypes.STRING,
},{
    timestamps: false 
})

module.exports = despachos;