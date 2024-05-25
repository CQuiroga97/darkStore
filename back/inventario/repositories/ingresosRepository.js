

class ingresosRepository{

    constructor(ingresos) {
        this.ingresos = ingresos;
      }

    async findAll(){
        return await this.ingresos.findAll();
    }
    async update(ingreso, id_ingreso){
        console.log("123")
        return await this.ingresos.update(ingreso, {where:{id_ingreso}});
    }
}
module.exports = ingresosRepository;