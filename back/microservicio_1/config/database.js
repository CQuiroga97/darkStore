const {Sequelize} = require('sequelize');

const squelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres'
});

module.exports = squelize;