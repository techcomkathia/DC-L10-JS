// instale o express e crie um servidor web que responda com uma mensagem de texto para a rota raiz
// mensagem de texto : "Bem vindo a API do Magazine Cleitinho"
// acesse o servidor na porta 3000
const express = require('express')
const bancoDeDados = require('./bancoDados')

//importar o sequelize (objeto com as credenciais do banco de dados)
const sequelize = require('./config/configBancoDados')
//importação do modelo que será sincronizado com o banco de dados ( para fazer as alterações  necessárias  a tabela que reflita exatamente as mudanças feitas na model )
const Produtos = require('./modelos/produtosModel')

//middleware de validação
const validacoesMiddleware = require('./validacaoMiddleware')

const app = express()
//middleware de body parser (receber dados no formato JSON)
app.use(express.json()) //dá a capacidade de receber dados no formato JSON

app.get('/', (req, res) => {
    res.send({
        'mensagem': 'Bem vindo a API do Magazine Cleitinho',
        'versao': '1.0.0'
    })
})



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


//app.post('rota', middleware, funcao)
app.post('/produtos', validacoesMiddleware.validarProduto , (req, res) => {

    const produto = req.body
    //sucesso das validações
    //buscar o id do ultimo produto cadastrado + 1
    produto.id = bancoDeDados.empresa_dados.produtos[bancoDeDados.empresa_dados.produtos.length - 1].id + 1
    //arrayProdutos[indice do ultimo produto cadastrado].id + 1
    //adicionar o novo produto no array
    bancoDeDados.empresa_dados.produtos.push(produto)
    //responder com a mensagem de sucesso
    res.json({
        'produto': produto,
        'mensagem': 'Produto criado com sucesso',
        'quantidade': bancoDeDados.empresa_dados.produtos.length
    })
    
})


//rota de login para funcionarios
app.post('/login', validacoesMiddleware.validarLogin, (req, res) => {
    res.json({
        'mensagem': 'Logado com sucesso'
    })
})

//4) Get para todos os funcionários
//post para criar um novo funcionário

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000. Acesse http://localhost:5000')
    //todas as vezes que o servidor for iniciado, a conexão com o banco de dados será feita
    sequelize.authenticate() //método assíncrono
        .then(() => console.log('Banco de dados conectado com sucesso'))
        .then(()=> sequelize.sync({
            alter: true //alterar as tabelas no banco de dados ( sem excluir ) para adaptar as mudanças feitas na modelo
            //para que isso funcione é necessário importar os modelos no arquivo que esse método foi executado
        }))
        .catch((error) => console.log('Erro ao conectar ao banco de dados', error))
})