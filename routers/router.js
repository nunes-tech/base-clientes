const express = require("express")
const homeController = require("../controllers/HomeController")
const cadastrarController = require("../controllers/CadastrarController")

const router = express.Router()

router.post("/endereco/excluir/:id", homeController.ExcluirEndereco)
router.post("/endereco/:id", homeController.SalvarEndereco)
router.get("/endereco/:id", homeController.ExibirEndereco)
router.post("/atualizar/:id", homeController.EditarDadosUsuario)
router.get("/atualizar/:id", homeController.EditarUsuario)
router.post("/delete/:id", homeController.DeletarUsuario)
router.get("/cadastrar", cadastrarController.CadastrarController)
router.post("/cadastrar", cadastrarController.TratarController)
router.get("/", homeController.PaginaInicial)
router.post("/", homeController.TrataDadosFormulario)

module.exports = router