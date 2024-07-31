const db = require("../db/conn")
const { DataTypes } = require("sequelize")

const User = db.define("Users", {
   name: { 
        type: DataTypes.STRING,
        allowNull: false
    },
   idade: {
        type: DataTypes.INTEGER,
        require: true
    }
})

module.exports = User