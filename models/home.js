const Sequelize = require('sequelize')//Importando o módulo sequelize
const sequelize = new Sequelize('cadlivros','root','root2020',{
    dialect: 'mysql',
    host: '127.0.0.1'
})

const models = {}
const fs = require('fs')//Importando o módulo que gerencia o filesystem, para ler arquivos, escrever em arquivos etc.
const path = require('path')//Importando path para gerar 

    fs
      .readdirSync(__dirname)
      .filter((file) => file!='home.js')
      .forEach((file) => {
        const model = sequelize.import(path.join(__dirname,file))//importando arquivo do sequelize
        models[model.name] = model//Retorna o nome do model e coloca o model dentro
      })

const livro = sequelize.import('./livro.js')
//Conexão com o banco de dados
sequelize.authenticate().then(() => console.log('ops, conectou.'))

module.exports = {
    sequelize,
    models
}