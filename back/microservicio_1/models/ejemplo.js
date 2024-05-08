const {DataTypes} = require('sequelize');
const sequelize = require("../config/database")

const ejemplo = sequelize.define('Ejemplo', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
})

module.exports = ejemplo;