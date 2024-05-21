const express = require("express");
const router = express.Router();
const dependencyContainer = require('../src/dependencyContainer');

const UsuarioRepository = dependencyContainer.getRepository('usuarioRepository');
router.post("/usuarios", async (req, res)=>{
    try {
        const [rows] = await UsuarioRepository.findAll();
        if (rows.length <= 0) {
            res.status(200).json({message: "No hay usuarios"});
            return;
        }
        res.status(200).json(rows);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
})

router.post("/usuario", async (req, res)=>{
    try {
        const rows = await UsuarioRepository.findById(req.params.id);
    if (rows.length <= 0) {
        res.status(404).json({message: "No hay usuarios"});
        return;
    }
    res.status(200).json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal :( ',
        });
    }
})

module.exports = router;