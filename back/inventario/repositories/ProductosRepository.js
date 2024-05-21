
class ProductosRepository{

    constructor(productosModel) {
        this.productosModel = productosModel;
      }

    async findAll(){
        return await this.productosModel.findAll();
    }
    async findById(id_producto){
        return await this.productosModel.findByPk(id_producto);
    }
    async create(producto){
        return await this.productosModel.create(producto);
    }
    async update(id_producto, producto){
        return await this.productosModel.update(producto, {where:{id_producto}});
    }
    async delete(id_producto){
        return await this.productosModel.destroy({where:{id_producto}});
    }
}
module.exports = ProductosRepository;