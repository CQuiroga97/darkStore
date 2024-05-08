const express = require("express");
const routes = require("../controllers/routes.controller.js");
const mail = require("../controllers/mail.controller.js");
const router = express.Router();
const jwt = require('jsonwebtoken');
const EjemploRepository = require("../repositories/EjemploRepository.js")


router.post("/ejemplo", async (req, res)=>{
    const ejemplo = await EjemploRepository.findAll();
    res.status(200).json(ejemplo)

})

module.exports = router;