const model = require('../models/home')//Nesse model temos o nosso schema
const home = async ({ Livro },req,res) => { //Livro é um objeto
    const livros = await Livro.findAll()
    res.render('livros/home',{ livros })
    console.log(livros)
}

//Create form não precisa ser asyncrono
const createForm = (req,res) => {
    res.render('livros/create')//Nesse momento mando renderizar create em views
}

//Utilizado para processar o form
const createProcess = async({ Livro },req,res) => {
    await Livro.create(req.body)//Pegar dados do formulário
    res.redirect('/livros')
    console.log(req.body)
}

const deletarUm = async({Livro},req,res) => {
    await Livro.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/livros')
}

module.exports = {
    home, createForm, createProcess, deletarUm
}