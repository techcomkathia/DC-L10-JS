const Categoria = require('../modelos/categoriasModel')


function criarCategoria({nome, descricao}) {
    Categoria.create({
        nome,
        descricao
    }).then(()=>{
        console.log('Categoria criada com sucesso')
    }).catch((error)=>{
        console.log('Erro ao criar categoria', error)
    })    
}

function listarCategorias() {
    Categoria.findAll()
        .then((categorias)=>{
            const listaDetalheCategorias = categorias.map((categoria)=>categoria.dataValues)
            console.log(listaDetalheCategorias)
            return listaDetalheCategorias
        })
        .catch((error)=>{
            console.log('Erro ao buscar categoria', error)
        })
}



module.exports = {
    criarCategoria,
    listarCategorias
}


