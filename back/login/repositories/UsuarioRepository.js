class UsuarioRepository{

    constructor(usuarioModel) {
        this.usuarioModel = usuarioModel;
      }

    async findAll(){
        return await this.usuarioModel.findAll();
    }
    async findById(id){
        return await this.usuarioModel.findByPk(id);
    }
    async create(user){
        return await this.usuarioModel.create(user);
    }
    async update(id, user){
        return await this.usuarioModel.update(user, {where:{id}});
    }
    async delete(id){
        return await this.usuarioModel.destroy({where:{id}});
    }
    async findByCorreo(correo){
        return await this.usuarioModel.findAll({where:{correo}});
    }
}
module.exports = UsuarioRepository;