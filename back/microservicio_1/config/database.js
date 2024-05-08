const {Sequelize} = require('sequelize');
require('dotenv').config();
const squelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres'
});

module.exports = squelize;