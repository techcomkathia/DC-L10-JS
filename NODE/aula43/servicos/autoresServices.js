//os serviços executam funções diretamente no banco de dados, de forma assíncrona atraves do modelo (representando uma tabela do banco de dados)

//o CRUD será executado através de métodos do modelo, que receberão o objeto que representa  objeto que representa o dado a ser persistido

const Autores = require('../modelos/autoresModel')

function criarAutor({nome, nacionalidade, data_nascimento}) {
    Autores.create({
        nome,
        nacionalidade,
        data_nascimento
    }).then(()=>{
        console.log('Autor criado com sucesso')
    }).catch((error)=>{
        console.log('Erro ao criar autor', error)
    })    
}

function atualizarAutor(idAutor, {nome, nacionalidade, data_nascimento}) {
    Autores.update({
        nome,
        nacionalidade,
        data_nascimento
    }, 
    {
        where: { id_autor: idAutor}
    }).then(()=>{
        console.log('Autor atualizado com sucesso')
    }).catch((error)=>{
        console.log('Erro ao atualizar autor', error)
    })    
}

function atualizarNomeAutor(idAutor, nome) {
    Autores.update({
        nome
    }, 
    {
        where: { id_autor: idAutor}
    }).then(()=>{
        console.log('Autor atualizado com sucesso')
    }).catch((error)=>{
        console.log('Erro ao atualizar autor', error)
    })    
}

function atualizarDataNascimentoAutor(idAutor, data_nascimento) {
    Autores.update({
        data_nascimento
    }, 
    {
        where: { id_autor: idAutor}
    }).then(()=>{
        console.log('Autor atualizado com sucesso')
    }).catch((error)=>{
        console.log('Erro ao atualizar autor', error)
    })    
}

function excluirAutor(idAutor) {
    Autores.destroy({
        where: { id_autor: idAutor}
    }).then(()=>{
        console.log('Autor excluido com sucesso')
    }).catch((error)=>{
        console.log('Erro ao excluir autor', error)
    })    
}


function buscarUmAutor(idAutor) {
    Autores.findByPk(idAutor)
        //retorna o autor no formato de objeto
        //utilizar a propriedade dataValues para uma informação clara dos dados
        .then((autor)=>{
            console.log(autor.dataValues)
        })
        .catch((error)=>{
            console.log('Erro ao buscar autor', error)
        })
}

function buscarTodosAutores() {
     Autores.findAll()
        .then((autores)=>{
            const listaDetalheAutores = autores.map((autor)=>autor.dataValues)
            console.log(listaDetalheAutores)
            return listaDetalheAutores
           })
        .catch((error)=>{
            console.log('Erro ao buscar autor', error)
        })
}

//buscar por uma propriedade especifica
function buscarAutoresPorNacionalidade(nacionalidade) {
    Autores.findAll({
        where: { nacionalidade }
    })
    .then((autores)=>{
            //retorna um array de objetos com todos os autores que atendam a condicao
            const listaDetalheAutores = autores.map((autor)=>autor.dataValues)
            console.log(listaDetalheAutores)
            return listaDetalheAutores
        })
        .catch((error)=>{
            console.log('Erro ao buscar autor', error)
        })
}

//buscar por uma ou outra propriedade (or)
function buscarAutoresPorNacionalidadeOuDataNascimento(nacionalidade, data_nascimento) {
    Autores.findAll({
        where: { [Op.or]: [{ nacionalidade }, { data_nascimento }] }
    })
    .then((autores)=>{

            //retorna um array de objetos com todos os autores que atendam as condicões
            const listaDetalheAutores = autores.map((autor)=>autor.dataValues)
            console.log(listaDetalheAutores)
            return listaDetalheAutores
        })
        .catch((error)=>{
            console.log('Erro ao buscar autor', error)
        })
}

function buscarAutoresPorNacionalidadeEdataDeNascimento(nacionalidade, data_nascimento) {
    
    Autores.findAll({
        where: { [Op.and]: [{ nacionalidade }, { data_nascimento }] }
    })
}


module.exports = {
    criarAutor,
    atualizarAutor,
    atualizarNomeAutor,
    atualizarDataNascimentoAutor,
    excluirAutor,
    buscarUmAutor,
    buscarTodosAutores,
    buscarAutoresPorNacionalidade,
    buscarAutoresPorNacionalidadeOuDataNascimento,
    buscarAutoresPorNacionalidadeEdataDeNascimento
}