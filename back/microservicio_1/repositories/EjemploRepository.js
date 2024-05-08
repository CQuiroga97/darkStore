const Ejemplo = require("../models/ejemplo.js");
class EjemploRepository{

    async findAll(){
        return await Ejemplo.findAll();
    }
    async findById(id_marca){
        return await Ejemplo.findByPk(id_marca);
    }
    async create(user){
        return await Ejemplo.create(user);
    }
    async update(id_marca, user){
        return await Ejemplo.update(user, {where:{id_marca}});
    }
    async delete(id_marca){
        return await Ejemplo.destroy({where:{id_marca}});
    }
}
module.exports = new EjemploRepository();