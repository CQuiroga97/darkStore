
class PedidosRepository{

    constructor(pedidoModel) {
        this.pedidoModel = pedidoModel;
      }

    async findAll(){
        return await this.pedidoModel.findAll();
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
}
module.exports = PedidosRepository;