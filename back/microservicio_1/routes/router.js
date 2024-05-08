const express = require("express");
const router = express.Router();
const dependencyContainer = require('../src/dependencyContainer');

const EjemploRepository = dependencyContainer.getRepository('ejemploRepository');
router.post("/ejemplo", async (req, res)=>{
    const ejemplo = await EjemploRepository.findAll();
    res.status(200).json(ejemplo)
})

module.exports = router;