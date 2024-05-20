const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js")

const pedidos = sequelize.define('pedidos', {
    id_pedido: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    fecha_pedido: DataTypes.DATE,
    codigo_pedido: DataTypes.STRING,
    marca_id: DataTypes.INTEGER,
    usuario_marca_id: DataTypes.INTEGER,
    usuario_interno_id: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    cantidad_total_unidades: DataTypes.INTEGER,
},{
    timestamps: false 
})

module.exports = pedidos;