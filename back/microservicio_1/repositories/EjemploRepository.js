
class EjemploRepository{

    constructor(ejemploModel) {
        this.ejemploModel = ejemploModel;
      }

    async findAll(){
        return await this.ejemploModel.findAll();
    }
    async findById(id_marca){
        return await this.ejemploModel.findByPk(id_marca);
    }
    async create(user){
        return await this.ejemploModel.create(user);
    }
    async update(id_marca, user){
        return await this.ejemploModel.update(user, {where:{id_marca}});
    }
    async delete(id_marca){
        return await this.ejemploModel.destroy({where:{id_marca}});
    }
}
module.exports = EjemploRepository;