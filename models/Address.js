const { DataTypes } = require("sequelize")
const db = require("../db/conn")
const User = require("./User")

const Address = db.define("Address", {
    rua: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false
    }
} )

User.hasMany( Address )
Address.belongsTo( User )

module.exports = Address