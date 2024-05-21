
class DespachosRepository{

    constructor(despachoModel) {
        this.despachoModel = despachoModel;
      }

    async findAll(){
        return await this.despachoModel.findAll();
    }
    async findById(id_despacho){
        return await this.despachoModel.findByPk(id_despacho);
    }
    async create(despacho){
        return await this.despachoModel.create(despacho);
    }
    async update(id_despacho, despacho){
        return await this.despachoModel.update(despacho, {where:{id_despacho}});
    }
    async delete(id_despacho){
        return await this.despachoModel.destroy({where:{id_despacho}});
    }
}
module.exports = DespachosRepository;