const productosModel = require("../models/productos")
const ubicacionesModel = require("../models/ubicaciones")


class Ubicacion_productosRepository{

    constructor(Ubicacion_productosModel) {
        this.Ubicacion_productosModel = Ubicacion_productosModel;
      }

    async findAll(){
        return await this.Ubicacion_productosModel.findAll();
    }
    async findById(id_ubicacion_producto){
        return await this.Ubicacion_productosModel.findByPk(id_ubicacion_producto);
    }
    async create(ubicacion_producto){
        return await this.Ubicacion_productosModel.create(ubicacion_producto);
    }
    async update(id_ubicacion_producto, ubicacion_producto){
        return await this.Ubicacion_productosModel.update(ubicacion_producto, {where:{id_ubicacion_producto}});
    }
    async delete(id_ubicacion_producto){
        return await this.Ubicacion_productosModel.destroy({where:{id_ubicacion_producto}});
    }
    async findAllComplete() {
        return await this.Ubicacion_productosModel.findAll({
          include: [{
            model: productosModel
          },{
            model:ubicacionesModel}]
        });
      }
      async findAllByProducto(id_producto) {
        return await this.Ubicacion_productosModel.findAll({
          include: [{
            model: productosModel, where:{id_producto}
          },{
            model:ubicacionesModel}]
        });
      }
      async findAllByMarca(marca_id) {
        return await this.Ubicacion_productosModel.findAll({
          include: [{
            model: productosModel, where:{marca_id}
          },{
            model:ubicacionesModel}]
        });
      }
      async deleteByUbicacion(ubicacion_id){
        return await this.Ubicacion_productosModel.destroy({where:{ubicacion_id}});
    }
      async findAllByUbicacion(ubicacion_id) {
        await this.deleteByUbicacion(ubicacion_id)
        
        const ubicacion = await this.Ubicacion_productosModel.findAll({
          where: {ubicacion_id}
        });
        console.log(ubicacion)
        if(ubicacion.length > 0)
            return {alert:"No está disponible"}
        else
            return {alert:"Si está disponible"}

      }
      async ubicarProducto(ubicacion_id, producto_id, cantidad) {
        const ubicacion = await this.Ubicacion_productosModel.findAll({
          where: {ubicacion_id}
        });
        if(ubicacion.length > 0)
            return {alert:"No está disponible"}
        else
            return this.create({ubicacion_id:ubicacion_id, producto_id:producto_id, cantidad:cantidad})

      }
}
module.exports = Ubicacion_productosRepository;