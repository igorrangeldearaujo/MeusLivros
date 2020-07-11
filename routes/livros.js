const express = require('express')
const router = express.Router()
const livrosController = require('../controllers/livros')
const model = require('../models/home')

router.get('/',livrosController.home.bind(null,model.models))
router.post('/create',livrosController.createProcess.bind(null,model.models))//Não sei porque utilizo model.models
router.get('/create',livrosController.createForm)//Não é necessário inserir bind porque não é necessário inserir um módulo lá dentro
router.get('/delete/:id',livrosController.deletarUm.bind(null,model.models))



module.exports = router