
class MarcaRepository{

    constructor(marcaModel) {
        this.marcaModel = marcaModel;
      }

    async findAll(){
        return await this.marcaModel.findAll();
    }
    async findById(id_producto){
        return await this.marcaModel.findByPk(id_producto);
    }
    async create(producto){
        return await this.marcaModel.create(producto);
    }
    async update(id_producto, producto){
        return await this.marcaModel.update(producto, {where:{id_producto}});
    }
    async delete(id_producto){
        return await this.marcaModel.destroy({where:{id_producto}});
    }
}
module.exports = MarcaRepository;