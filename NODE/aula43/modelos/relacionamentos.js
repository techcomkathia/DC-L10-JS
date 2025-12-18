//importação de todos os modelos
const Livros = require('./livrosModel')
const Autores = require('./autoresModel')
const Categorias = require('./categoriasModel')


//definição dos relacionamentos
Livros.belongsTo(Autores) //um ou mais livros pertencem a um autor 
Livros.belongsTo(Categorias) //um ou mais livros pertencem a uma categoria 



Autores.hasMany(Livros) //um autor pode ter um ou muitos livros (1,n)
Categorias.hasMany(Livros) //uma categoria pode ter um ou muitos livros(1,n)

//exportação dos modelos
module.exports = {
    Livros,
    Autores,
    Categorias
}