
const { where } = require("sequelize");
const ingresosModel = require("../models/ingresos")
const producto = require("../models/productos")
class detalles_ingresosRepository{

    constructor(detalles_ingresos) {
        this.detalles_ingresos = detalles_ingresos;
      }

    async findAll(){
        return await this.detalles_ingresos.findAll();
    }
    async findById(id_detalle_ingreso){
        return await this.detalles_ingresos.findByPk(id_detalle_ingreso);
    }
    async create(detalle_ingreso){
        return await this.detalles_ingresos.create(detalle_ingreso);
    }
    async update(id_detalle_ingreso, detalle_ingreso){
        return await this.detalles_ingresos.update(detalle_ingreso, {where:{id_detalle_ingreso}});
    }
    async delete(id_detalle_ingreso){
        return await this.detalles_ingresos.destroy({where:{id_detalle_ingreso}});
    }
    async findProdcutosIngresados(marca_id) {
        const estado = "INGRESADO";
        let result = await this.detalles_ingresos.findAll({
            include: [{
                model: ingresosModel,
                where: { estado: estado},
                attributes: ['id_ingreso'],  // No incluir atributos del modelo de ingresos
                include: []
            },{
                model: producto,
                where:{marca_id},
                attributes: ['id_producto', 'referencia', 'descripcion', 'marca_id', 'categoria_producto_id'] // Ajusta los atributos según lo que necesites
            }],
            attributes: ['cantidad'] // No incluir atributos de detalles_ingresos si no son necesarios
        });
        
        return result;
    }
}
module.exports = detalles_ingresosRepository;