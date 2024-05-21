const UbicacionesRepository = require('../repositories/UbicacionesRepository');
const Ubicacion_productosRepository = require('../repositories/Ubicacion_productosRepository');
const ProductosRepository = require('../repositories/ProductosRepository');
const MarcaRepository = require('../repositories/MarcaRepository');
const ubicaciones = require('../models/ubicaciones');
const ubicacion_productos = require('../models/ubicacion_productos');
const productos = require('../models/productos');
const marca = require('../models/marca');

class DependencyContainer {
  constructor() {
    this.repositories = {
      UbicacionesRepository: new UbicacionesRepository(ubicaciones),
      Ubicacion_productosRepository: new Ubicacion_productosRepository(ubicacion_productos),
      ProductosRepository: new ProductosRepository(productos),
      MarcaRepository: new MarcaRepository(marca),
    };
  }

  getRepository(repositoryName) {
    return this.repositories[repositoryName];
  }
}

module.exports = new DependencyContainer();