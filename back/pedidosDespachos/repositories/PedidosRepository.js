const clientes = require("../models/clientes");
const detalles_pedidos = require("../models/detallesPedidos");
const productos = require("../models/productos");

class PedidosRepository{

    constructor(pedidoModel) {
        this.pedidoModel = pedidoModel;
      }

    async findAll(estado){
        return await this.pedidoModel.findAll(
            {
                include:[{
                    model:detalles_pedidos,
                    include:[{
                        model:clientes
                    },{
                        model:productos
                    }]
                }], where:{estado:estado}
            }
        );
    }
    async findById(id_pedido){
        return await this.pedidoModel.findByPk(id_pedido);
    }
    async create(pedido){
        return await this.pedidoModel.create(pedido);
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
module.exports = PedidosRepository;