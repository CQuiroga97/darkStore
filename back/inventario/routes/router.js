const express = require("express");
const router = express.Router();
const dependencyContainer = require('../src/dependencyContainer');

const UbicacionesRepository = dependencyContainer.getRepository('UbicacionesRepository');
const ProductosRepository = dependencyContainer.getRepository('ProductosRepository');
const Ubicacion_productosRepository = dependencyContainer.getRepository('Ubicacion_productosRepository');
const MarcaRepository = dependencyContainer.getRepository('MarcaRepository');
router.post("/totalUbicaciones", async (req, res)=>{
    const ubicaciones = await Ubicacion_productosRepository.findAllComplete();
    res.status(200).json(ubicaciones)
})
router.post("/totalUbicacionesProducto", async (req, res)=>{
    const ubicaciones = await Ubicacion_productosRepository.findAllByProducto(req.body.id_producto);
    res.status(200).json(ubicaciones)
})
router.post("/totalUbicacionesMarca", async (req, res)=>{
    const ubicaciones = await Ubicacion_productosRepository.findAllByMarca(req.body.id_marca);
    res.status(200).json(ubicaciones)
})
router.post("/reubicarMercancia", async (req, res)=>{
    const ubicaciones = await Ubicacion_productosRepository.findAllByUbicacion(req.body.ubicacion_id);
    res.status(200).json(ubicaciones)
})
router.post("/borrarUbicacion", async (req, res)=>{
    const ubicaciones = await Ubicacion_productosRepository.deleteByUbicacion(req.body.ubicacion_id);
    res.status(200).json(ubicaciones)
})
router.post("/ubicarProducto", async (req, res)=>{
    const ubicaciones = await Ubicacion_productosRepository.ubicarProducto(req.body.ubicacion_id, req.body.producto_id, req.body.cantidad);
    res.status(200).json(ubicaciones)
})
router.post("/getMarcas", async (req, res)=>{
    const marcas = await MarcaRepository.findAll();
    res.status(200).json(marcas)
})
router.post("/getProductos", async (req, res)=>{
    const productos = await ProductosRepository.findAll();
    res.status(200).json(productos)
})

module.exports = router;