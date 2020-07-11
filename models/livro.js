const livroModel = (sequelize, DataTypes) => {
    const Livro = sequelize.define('Livro', {
        titulo: DataTypes.STRING,
        isbn: DataTypes.STRING,
        publicacao: DataTypes.DATE,
        autor: DataTypes.STRING
    }) 

    return Livro
}

module.exports = livroModel