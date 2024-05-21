const UsuarioRepository = require('../repositories/UsuarioRepository');
const usuario = require('../models/usuario');

class DependencyContainer {
  constructor() {
    this.repositories = {
      usuarioRepository: new UsuarioRepository(usuario)
    };
  }

  getRepository(repositoryName) {
    return this.repositories[repositoryName];
  }
}

module.exports = new DependencyContainer();