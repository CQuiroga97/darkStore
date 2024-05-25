const clientes = require("../models/clientes");
const detalles_pedidos = require("../models/detallesPedidos");
const productos = require("../models/productos");

class PedidosDetallesRepository{

    constructor(pedidoDetalleModel) {
        this.pedidoDetalleModel = pedidoDetalleModel;
      }

    async findById(id_pedido){
        return await this.pedidoModel.findByPk(id_pedido);
    }
    async create(detalle, id_pedido){
        const updatedDetalle = detalle.map(de => ({
            ...de,
            pedido_id: id_pedido  // Agrega el campo id_colegio con un valor fijo de 1 a cada objeto
        }));
        return await this.pedidoDetalleModel.bulkCreate(updatedDetalle);
    }
    async update(id_pedido, pedido){
        return await this.pedidoModel.update(pedido, {where:{id_pedido}});
    }
    async delete(id_pedido){
        return await this.pedidoModel.destroy({where:{id_pedido}});
    }
    async crearPedidoConDetalles(pedidoData, detallesData) {
        return await this.pedidoModel.create(pedidoData);
    }
    
}
module.exports = PedidosDetallesRepository;