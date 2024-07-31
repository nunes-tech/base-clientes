
const Address = require("../models/Address")
const User = require("../models/User")

exports.PaginaInicial = (req, res) => {

   User.findAll( { raw: true } ).then( data => {

        //req.session.usuario = { name: "Francisco", logado: true}
        // req.flash("info", "Francisco Nunes")
        // req.flash("teste", "Meu teste aqui")
        // console.log( req.flash("info"))
        // console.log( req.flash("teste"))
        //console.log( req.session.usuario )
        res.render("index", { data } )

    }).catch(err => {
        console.log( err )
        res.render("index")
    })
    
}


exports.TrataDadosFormulario = (req, res) => {
    console.log(req.body)
    res.redirect("/")
}

exports.DeletarUsuario = async (req, res) => {

    const id = parseInt(req.params.id)
    const userAtual = await User.findByPk(id)
    
    if(userAtual) {
        await userAtual.destroy().then( user => console.log("Usuario deletado: ", user) ).catch( err => console.log("Falha ao deletar: ", err))
    }
    res.redirect("/")

}

exports.EditarUsuario = async (req, res) => {
    const id = parseInt( req.params.id )

    if(id || id == 0) {
        const user = await User.findByPk( id )

        if(user) {
            const userSelecionado = user.dataValues
            res.render("atualizar", { userSelecionado })

        } else {
            res.redirect("/")
        }
    }
}


exports.EditarDadosUsuario = async (req, res) => {
    const id = parseInt( req.params.id )
    const name = req.body.name
    const idade = req.body.idade

    if(id && name && idade) {
        const user = await User.findByPk( id )

        if(user) {
            await user.update({name, idade}).then( data => {
                console.log("Dados atualizados: ", data)
                res.redirect("/")
            }).catch(err => console.log("Falha ao atualizar usuario: ", err))

        } else {
            res.redirect("/")
        }
    }
}

exports.ExibirEndereco = async (req, res) => {
    const id = parseInt( req.params.id )

     const user = await User.findOne( {include: Address, where: { id: id }} )

  
    const userSelecionado = user.get({plain: true})

    res.render("endereco", { userSelecionado })
}

exports.SalvarEndereco = async (req, res) => {
    const UserId = parseInt( req.params.id )
    const rua = req.body.rua
    const bairro = req.body.bairro
    const cidade = req.body.cidade
    const numero = req.body.numero

    const endereco = {
        UserId,
        rua,
        bairro,
        cidade,
        numero
    }

    await Address.create( endereco ).then( async data => {

        const userAtual = await User.findOne( { include: Address, where: { id: UserId } } )
        const userSelecionado = userAtual.get({plain: true})
        
        res.render("endereco", { userSelecionado })

    }).catch( err => {
        console.log("Falha ao salvar endereço, erro: ", err)
        res.redirect("/")
    })

}

exports.ExcluirEndereco = async (req, res) => {
    const id = parseInt( req.params.id )
    const endereco = await Address.findByPk( id )
    const userId = endereco.get({plain: true})["UserId"]
    await endereco.destroy()
    res.redirect(`/endereco/${userId}`)
}