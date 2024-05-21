
class UbicacionesRepository{

    constructor(ubicacionesModel) {
        this.ubicacionesModel = ubicacionesModel;
      }

    async findAll(){
        return await this.ubicacionesModel.findAll();
    }
    async findById(id_ubicacion){
        return await this.ubicacionesModel.findByPk(id_ubicacion);
    }
    async create(ubicacion){
        return await this.ubicacionesModel.create(ubicacion);
    }
    async update(id_ubicacion, ubicacion){
        return await this.ubicacionesModel.update(ubicacion, {where:{id_ubicacion}});
    }
    async delete(id_ubicacion){
        return await this.ubicacionesModel.destroy({where:{id_ubicacion}});
    }
}
module.exports = UbicacionesRepository;