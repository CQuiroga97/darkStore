const Ejemplo = require("../models/ejemplo");
class EjemploRepository{

    async findAll(){
        return await Ejemplo.findAll();
    }
    async findById(id){
        return await Ejemplo.findByPk(id);
    }
    async create(user){
        return await Ejemplo.create(user);
    }
    async update(id, user){
        return await Ejemplo.update(user, {where:{id}});
    }
    async delete(id){
        return await Ejemplo.destroy({where:{id}});
    }
}
module.exports = new EjemploRepository();