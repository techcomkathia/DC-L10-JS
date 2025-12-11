// instale o express e crie um servidor web que responda com uma mensagem de texto para a rota raiz
// mensagem de texto : "Bem vindo a API do Magazine Cleitinho"
// acesse o servidor na porta 3000
const express = require('express')
const bancoDeDados = require('./bancoDados')

const app = express()
app.use(express.json()) //dá a capacidade de receber dados no formato JSON

app.get('/', (req, res) => {
    res.send({
        'mensagem': 'Bem vindo a API do Magazine Cleitinho',
        'versao': '1.0.0'
    })
})

//1)
/* Crio uma API com os seguintes endpoints :
/produtos
    GET /produtos : retorna todos os produtos
    GET /produtos/beleza : retorna todos os produtos da categoria beleza
    GET /produtos/eletronicos : retorna todos os produtos da categoria eletrônico
    GET /produtos/vestuario : retorna todos os produtos da categoria vestuário*/
//localhost:5000/produtos?categoria=nomecategoriaprodurada
/*app.get('/produtos', (req, res) => {
    res.send({
        'produtos': bancoDeDados.empresa_dados.produtos,
        'quantidade': bancoDeDados.empresa_dados.produtos.length
    })
})

app.get('/produtos/beleza', (req, res) => {

    const produtosFiltrados = bancoDeDados.empresa_dados.produtos.filter(produtos =>{
        return produtos.departamento === 'Beleza e Cuidados'
    })

    res.send({
        'produtos': produtosFiltrados,
        'categoria': 'Beleza e Cuidados',
        'quantidade': produtosFiltrados.length
    })
    
})

app.get('/produtos/eletronicos', (req, res) => {

    const produtosFiltrados = bancoDeDados.empresa_dados.produtos.filter(produtos =>{
        return produtos.departamento === 'Eletrônico'
    })

    res.send({
        'produtos': produtosFiltrados,
        'categoria': 'Eletrônico',
        'quantidade': produtosFiltrados.length
    })
    
})*/


//2)
// transfome a rota produtos para que ela exiba todos os produtos mas aceite uma categoria como parâmetro de consulta
// parâmetros de consulta com os nomes das categorias

app.get('/produtos', (req, res) => {
    //query param
    const {categoria} = req.query
    //exitir a pesquisa por categoria
    if(categoria){
        const produtosFiltrados = bancoDeDados.empresa_dados.produtos.filter(produtos =>{
                return produtos.departamento === categoria
            }
        )
        //categoria informada , mas ela pode existir ou não
        if(produtosFiltrados.length == 0){
            res.send({
                erro: 'Categoria não possui produtos cadastrados'
            })
        }
        else{
            res.json({
                'produtos': produtosFiltrados,
                'categoria': categoria,
                'quantidade': produtosFiltrados.length
            })
        }
    }
    //não ser informado a categoria, exibir todos os produtos
    else{
        //retorna a resposta com todos os produtos de todas as categorias
      res.json({
        'produtos': bancoDeDados.empresa_dados.produtos,
        'quantidade': bancoDeDados.empresa_dados.produtos.length
        })  
    }
    
})
//path param
app.get('/produtos/:id', (req, res) => {
    const {id} = req.params
    const produto = bancoDeDados.empresa_dados.produtos.find(produto => produto.id == id)
    if(!produto){
        res.json({
            'mensagem': 'Produto nao encontrado'
        })
        return
    }
    res.json({
        'produtoProcurado': produto
    })
})
//3)
//crie uma rota post para criar um produto.
//o produto deve ter o seguinte formato:
//nome, preco , departamento, quantidade e estoque
//quando o produto não for criado por falta de informação, mostre a mensagem 'Todos os atributos devem ser passados. Nome, preco, departamento, quantidade e estoque'
//quando todos os atributos forem passados, crie um produto, adicionando id e colocando ele no array de produtos
//retorne o produto criado e a mensagem 'Produto criado com sucesso'


//4) Get para todos os funcionários
//post para criar um novo funcionário

app.listen(5000, () => {
    console.log('Servidor rodando na porta 3000. Acesse http://localhost:5000')
})