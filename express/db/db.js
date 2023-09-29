const { Sequelize } = require("sequelize")

const db = new Sequelize("pg_comercial_parcial2", "root", "", {
  host: "localhost",
  dialect: 'mysql',
})

module.exports = db