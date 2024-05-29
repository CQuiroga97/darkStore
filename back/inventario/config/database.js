const {Sequelize} = require('sequelize');
require('dotenv').config();
const squelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: false // No usar SSL
      }
});

module.exports = squelize;