const {criarAutor} = require('./servicos/autoresServices')
const servicos = require('./servicos/autoresServices')
const servicosLivros = require('./servicos/livrosServices')
const servicosCategorias = require('./servicos/categoriasServices')

/* ------------- CREATE ------------- */

// criarAutor({
//     nome: 'J.K. Rowling',
//     nacionalidade: 'Inglaterra',
//     data_nascimento: '1965-07-31'
// }) //id no banco de dados: 1

// criarAutor({
//     nome: 'J.R.R. Tolkien',
//     nacionalidade: 'Estados Unidos',
//     data_nascimento: '1892-01-03'
// }) //id no banco de dados: 2

// criarAutor({
//     nome: 'J.R.R. Tolkien',
//     nacionalidade: 'Estados Unidos',
//     data_nascimento: '1892-01-03'
// }) erro de chave duplicada ( o autor J.R.R. Tolkien ja existe no banco de dados)

// criarAutor({
//     nacionalidade: 'Estados Unidos',
//     data_nascimento: '1892-01-03'
// }) erro de ausencia de um parametro obrigatorio ( o nome nao foi informado)



/* ------------- UPDATE ------------- */

// servicos.atualizarAutor(1, {
//     nome: 'J.K. Rowling',
//     nacionalidade: 'Britanica',
//     data_nascimento: '1965-07-31'
// })

// servicos.atualizarAutor(1, {
//     nacionalidade: 'Inglaterra',
//     data_nascimento: '2025-07-31'
// })

// servicos.atualizarDataNascimentoAutor(1, '2025-07-31')


/* ------------- READ ------------- */


//servicos.buscarUmAutor(1)

//servicos.buscarTodosAutores()


// criar uma categoria

// servicosCategorias.criarCategoria({
//     nome: 'Fantasia',
//     descricao: 'Livros de fantasia'
// })

// servicosLivros.criarLivro({
//     titulo: 'Harry Potter e a Pedra Filosofal',
//     autor_id: 1,
//     categoria_id: 1,
//     ano_publicacao: 1997
// })


servicosLivros.listaDetalheLivros()