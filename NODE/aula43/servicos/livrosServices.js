const Categorias = require('../modelos/categoriasModel')
const Livros = require('../modelos/livrosModel')


function criarLivro(livro) {
    Livros.create(livro).
    then(() => console.log('Livro criado com sucesso'))
    .catch((error) => console.log('Erro ao criar livro', error))
}

function listarLivros() {
    Livros.findAll()
    .then((livros) => {
        const listaDetalheLivros = livros.map((livro) => livro.dataValues)
        console.log(listaDetalheLivros)
        return listaDetalheLivros
    })
    .catch((error) => console.log('Erro ao buscar livro', error))
}

//listar os livros incluindo o nome do autor e o nome da categoria
//TODO: verificar erro na linha do include ( não está consewguindo incluir os campos de autor e categoria)
function listaDetalheLivros() {
    Livros.findAll(
       // {include: ['autores.nome', 'categorias.nome']}
    ).then((livros) => {
        const listaDetalheLivros = livros.map((livro) => livro.dataValues)
        console.log(listaDetalheLivros)
        return listaDetalheLivros
    })
}

module.exports = {
    criarLivro,
    listarLivros,
    listaDetalheLivros
}
