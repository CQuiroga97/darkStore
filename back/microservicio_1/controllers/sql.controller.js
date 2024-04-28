const sql = require('mssql');
const config = require("../properties/properties.js");
let con;

exports.query = async (spName, params)=>{
    return new Promise(async (resolve, reject) => {

        let pool = await sql.connect(config.configDb)
        console.log(params)
        let query = pool.request();
        params.forEach(el=>{
            query.input(el.nombre, el.tipo, el.valor);
        })
        query.execute(spName, (err, recordset)=>{
            if(err){
                console.log(err);
            }
            resolve(recordset)
        })
    })
}