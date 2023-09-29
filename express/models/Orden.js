const { DataTypes } = require("sequelize")
const sequelize = require('../db/db.js')

const Orden = sequelize.define("Orden", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombreCliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  total: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
}, { tableName: "orden", freezeTableName: true, timestamps: false })

module.exports = Orden