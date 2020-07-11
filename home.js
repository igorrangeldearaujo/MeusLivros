const express = require('express')
const port = process.env.PORT || 2019
const escult = express()
const path = require('path')//path é para gerar o path do views
const livrosRouter = require('./routes/livros')
const bodyParser = require('body-parser')
const model = require('./models/home')

escult.use(livrosRouter)//Utilizando a rota de livros
escult.use('/livros',livrosRouter)//Acessar a lista de livros
escult.use(express.static('public'))//Agora posso reconhecer os arquivos estáticos (bootstrap...)
escult.set('view engine','ejs')
escult.set('views',path.join(__dirname,'views'))//Agora posso renderizar os arquivos que estão na pasta views
escult.use(bodyParser.urlencoded({ extended: true }))

escult.get('/',(req,res) => {
    res.render('home')
})
/** { force: true }*/
model.sequelize.sync().then(() => { /* force true, força a atualização das tabelas */
    escult.listen(port, (req,res) => {
        console.log('oba, escultando na porta ' + port)
    })
})


