const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize("Mydatabase", "root", "12345678", {
    host: "localhost",
    dialect: "mysql"
})

// try {
    
//     sequelize.authenticate()
//     console.log("Conevtamos com sucesso ao Banco de dados!")

// } catch (error) {
//     console.log("Erro ao conectar:", error)
// }

module.exports = sequelize