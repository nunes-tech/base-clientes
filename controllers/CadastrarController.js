const User = require("../models/User")

exports.CadastrarController = (req, res) => {
    res.render("cadastrar")
}

exports.TratarController = async (req, res) => {
    const name = req.body.name
    const idade = req.body.idade

if(name && idade) {
    await User.create({
        name: name,
        idade: idade
    })
}

    console.log( "nome: ", name, "idade: ", idade)
    res.redirect("/")
}