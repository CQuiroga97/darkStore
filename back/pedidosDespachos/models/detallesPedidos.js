const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js");
const pedidos = require('./pedidos.js');
const productos = require('./productos.js');
const clientes = require('./clientes.js');

const detalles_pedidos = sequelize.define('detalles_pedidos', {
    id_detalle_pedido: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Asumiendo que es auto-incremental
      },
    pedido_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    cliente_id: DataTypes.INTEGER,
    ciudad_destino: DataTypes.STRING,
    direccion_destino: DataTypes.STRING,
    telefono_contacto_destino: DataTypes.STRING,
},{
    timestamps: false 
})
pedidos.hasMany(detalles_pedidos, { foreignKey: 'pedido_id' });
productos.hasMany(detalles_pedidos, { foreignKey: 'producto_id' });
detalles_pedidos.belongsTo(pedidos, {foreignKey:'pedido_id'});
detalles_pedidos.belongsTo(productos, {foreignKey:'producto_id'});
detalles_pedidos.belongsTo(clientes, {foreignKey:'cliente_id'});
module.exports = detalles_pedidos;