const express = require("express");
const routes = require("../controllers/routes.controller.js");
const mail = require("../controllers/mail.controller.js");
const router = express.Router();
const jwt = require('jsonwebtoken');

mapSpRouter("/prueba", "spPrueba");
function mapSpRouter(route, spName){
    router.post(route, (req, res)=>{
        routes.callSp(spName, req, res);
    })
}
router.post("/mailSender", (req, res)=>{
    console.log(req.body.dataMail)
    mail.enviarCorreo(req.body.dataMail, res);

})
router.post("/registroGoogle", (req, res)=>{
    console.log(req.body)
    res.send("Listo")
});
module.exports = router;