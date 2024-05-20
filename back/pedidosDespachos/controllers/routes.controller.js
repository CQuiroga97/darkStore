const sql = require("./sql.controller.js");
const parametros = require("./params.controller.js").parametros;

exports.callSp = (spName, req, res) =>{
    
    sql.query(spName,parametros(req.body, spName)).then((resp)=>{
        res.status(200).json(resp)
    })
}