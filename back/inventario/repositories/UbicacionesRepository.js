
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
    async findByCategoria(categoria_producto_id){
        var result = await this.ubicacionesModel.findAll(
            {where:{categoria_producto_id}}
        );
        let fullData = [];
        let buffer = {};
        let estan = ""
        result.forEach(element=>{
            if(element.dataValues.estan != estan){
                if(buffer.estan)
                    fullData.push(buffer)
                estan = element.dataValues.estan
                buffer = {estan:estan, columna:[]}
            }
            buffer.columna.push({columna:element.dataValues.columna, nivel:{nivel:element.dataValues.nivel,id_ubicacion:element.dataValues.id_ubicacion}});
        })
        
        let nameBuff = ""
        fullData.forEach(element=>{
            console.log(element)
            buffer = {};
            let buffer2 = [];
            let column = ""
            element.columna.forEach(columnaFull=>{
                if(columnaFull.columna != column){
                    if(buffer.columna)
                        buffer2.push(buffer);
                    column = columnaFull.columna
                    buffer = {columna:column, nivel:[]}
                }
                buffer.nivel.push(columnaFull.nivel);
            })
            buffer2.push(buffer);
            element.columna = []
            element.columna.push(buffer2)
        })
        return fullData;
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