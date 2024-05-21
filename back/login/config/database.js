const {Sequelize} = require('sequelize');
require('dotenv').config();
const squelize = new Sequelize(process.env.PGDATABASE,process.env.PGUSER,process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    port: process.env.PGPORT,
    dialect: 'postgres',
});

module.exports = squelize;