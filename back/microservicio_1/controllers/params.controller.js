const TYPES = require("mssql").TYPES;
const md5 = require('md5');
let parametrizacion = (data)=>{
    try{
        let obj = {
            table:[],
        }
        data.forEach(dato =>{
            let nombre = dato.item;
            let valor = dato.datos.valor;
            let tipo = dato.datos.tipo;

            if(tipo == "varchar")
                obj.table.push({nombre:nombre, valor:valor, tipo:TYPES.VarChar})
            else if(tipo == "int")
                obj.table.push({nombre:nombre, valor:valor, tipo:TYPES.Int})
            else if(tipo == "bit")
                obj.table.push({nombre:nombre, valor:valor, tipo:TYPES.Bit})
            else if(tipo == "date")
                obj.table.push({nombre:nombre, valor:valor, tipo:TYPES.Date})
            else if(tipo == "time")
                obj.table.push({nombre:nombre, valor:valor, tipo:TYPES.Time})
            else if(tipo == "char")
                obj.table.push({nombre:nombre, valor:valor, tipo:TYPES.Char})
            else if(tipo == "bigint")
                obj.table.push({nombre:nombre, valor:valor, tipo:TYPES.BigInt})
            else if(tipo == "float")
                obj.table.push({nombre:nombre, valor:valor, tipo:TYPES.Float})
        })
        return obj.table;
    }catch(err){
        console.log(err);
        return err;
    }
}
exports.parametros = (req, spName) => {
    try{
        switch(spName){
            case ("spPrueba"):
                return parametrizacion([
                    {item:"valor_1", datos:{valor:req.param_1, tipo:"int"}},
                    {item:"valor_2", datos:{valor:req.param_2, tipo:"int"}},
                ])
        }
        return;
    }catch(err){
        console.log(err);
        return ;
    }
}