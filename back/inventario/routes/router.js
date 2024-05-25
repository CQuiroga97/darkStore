const express = require("express");
const router = express.Router();
const dependencyContainer = require('../src/dependencyContainer');

const UbicacionesRepository = dependencyContainer.getRepository('UbicacionesRepository');
const ProductosRepository = dependencyContainer.getRepository('ProductosRepository');
const Ubicacion_productosRepository = dependencyContainer.getRepository('Ubicacion_productosRepository');
const MarcaRepository = dependencyContainer.getRepository('MarcaRepository');
const detalle_ingresoRepository = dependencyContainer.getRepository('detalles_ingresosRepository');
const ingresosRepository = dependencyContainer.getRepository('ingresosRepository');
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
router.post("/getProductosMarca", async (req, res)=>{
    const productos = await ProductosRepository.findByMarca(req.body.marca_id);
    res.status(200).json(productos)
})
router.post("/getProductosIngresados", async (req, res)=>{
    const productos = await detalle_ingresoRepository.findProdcutosIngresados(req.body.marca_id);
    res.status(200).json(productos)
})
router.post("/restarCantidadUbicaciones", async (req, res)=>{
    const productos = await Ubicacion_productosRepository.decrementMultipleInventoryItems(req.body);
    res.status(200).json(productos)
})
router.post("/getUbicacionesCategoria", async (req, res)=>{
    const ubicaciones = await UbicacionesRepository.findByCategoria(req.body.categoria_producto_id);
    res.status(200).json(ubicaciones)
})
router.post("/almacenarProducto", async (req, res)=>{
    const ubicaciones = await Ubicacion_productosRepository.create(req.body);
    res.status(200).json(ubicaciones)
})
router.post("/updateIngreso", async (req, res)=>{
    const ingresos = await ingresosRepository.update(req.body, req.body.id_ingreso);
    res.status(200).json(ingresos)
})

module.exports = router;