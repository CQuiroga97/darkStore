const express = require("express");
const router = express.Router();
const dependencyContainer = require('../src/dependencyContainer');

const UbicacionesRepository = dependencyContainer.getRepository('UbicacionesRepository');
const ProductosRepository = dependencyContainer.getRepository('ProductosRepository');
const Ubicacion_productosRepository = dependencyContainer.getRepository('Ubicacion_productosRepository');
const MarcaRepository = dependencyContainer.getRepository('MarcaRepository');
const PedidosRepository = dependencyContainer.getRepository('PedidosRepository');
const DespachosRepository = dependencyContainer.getRepository('DespachosRepository');

router.post("/getPedidos", async (req, res)=>{
    const pedidos = await PedidosRepository.findAll();
    res.status(200).json(pedidos)
})
router.post("/getPedidosById", async (req, res)=>{
    const pedidos = await PedidosRepository.findById(req.body.id_pedido);
    res.status(200).json(pedidos)
})
router.post("/createPedido", async (req, res)=>{
    const pedidos = await PedidosRepository.create(req.body);
    res.status(200).json(pedidos)
})
router.post("/deletePedido", async (req, res)=>{
    const pedidos = await PedidosRepository.delete(req.body.id_pedido);
    res.status(200).json(pedidos)
})
router.post("/updatePedido", async (req, res)=>{
    const pedidos = await PedidosRepository.update(req.body.id_pedido,req.body);
    res.status(200).json(pedidos)
})

router.post("/getDespachos", async (req, res)=>{
    const despachos = await DespachosRepository.findAll();
    res.status(200).json(despachos)
})
router.post("/getDespachosById", async (req, res)=>{
    const despachos = await DespachosRepository.findById(req.body.id_despacho);
    res.status(200).json(despachos)
})
router.post("/createDespacho", async (req, res)=>{
    const despachos = await DespachosRepository.create(req.body);
    res.status(200).json(despachos)
})
router.post("/deleteDespacho", async (req, res)=>{
    const despachos = await DespachosRepository.delete(req.body.id_despacho);
    res.status(200).json(despachos)
})
router.post("/updateDespacho", async (req, res)=>{
    const despachos = await DespachosRepository.update(req.body.id_despacho,req.body);
    res.status(200).json(despachos)
})

module.exports = router;