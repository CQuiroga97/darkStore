const EjemploRepository = require('../repositories/EjemploRepository');
const Ejemplo = require('../../microservicio_1/models/ejemplo');

class DependencyContainer {
  constructor() {
    this.repositories = {
      ejemploRepository: new EjemploRepository(Ejemplo)
    };
  }

  getRepository(repositoryName) {
    return this.repositories[repositoryName];
  }
}

module.exports = new DependencyContainer();