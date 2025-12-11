//importar o express para o arquivo
const express = require('express')

//criar uma instância do express
const app = express()

let dados = [
    {id: 1, nome: 'Cleitinho', idade: 2, cor: 'laranja'},
    {id: 2, nome: 'Cleitinho', idade: 2, cor: 'verde'},
    {id: 3, nome: 'Cleitinho', idade: 2, cor: 'azul'},
    {id: 4, nome: 'Cleitinho', idade: 2, cor: 'amarelo'},
    {id: 5, nome: 'Cleitinho', idade: 2, cor: 'vermelho'}
]

//configurar o express para receber dados no formato JSON
app.use(express.json())

//criar uma rota
//app.METODO(URL, função de callback)
// função de callback recebe uma requisição e uma resposta como parâmetros e será executada quando a rota for acessada
app.get('/', (req, res) => {
    res.send('Bem vindo ao meu servidor')
    //respondendo com uma mensagem de texto
})
//npm install nodemon
//comando para executar o servidor com o nodemon (nodemon main.js)

/*app.get('/cleitinho', (req, res) => {
    res.end(JSON.stringify({
        'tipo': 'gato',
        'nome': 'Cleitinho',
        'idade': 2,
        'cor': 'laranja',
        'mensagem': 'Bem vindo ao meu servidor',
        'versao': '1.0.0'
    }))
})*/
//usandoParametros de consulta (query params)
//digitar no navegador http://localhost:3000/cleitinho?cor=laranja
app.get('/cleitinho', (req, res) => {
    //retorna todos os cleitinhos ou um cleitinho especifico atravez da cor passada como query params
    const {cor} = req.query
    //caso seja passado a cor
    if(cor){
        //filtrar os cleitinhos pelo cor
        const cleitinho = dados.find(cleitinho => cleitinho.cor == cor)
        //caso o cleitinho nao seja encontrado
        if(!cleitinho){
            res.json({
                'mensagem': 'Cleitinho nao encontrado',
                'cor': cor
            })
        }else{
            res.json({
                'mensagem': 'Cleitinho encontrado',
                'cleitinho': cleitinho,
                'cor': cor
            })
        }
    }else{
        //caso nao seja passado a cor retorna todos os cleitinhos
        res.json({
            'mensagem': 'Mostrando todos os cleitinhos',
            'cleitinhos': dados
        })
    }

})
app.get('/cleitinho/:id', (req, res) => {
    //trazer o id da rota
    const id = req.params.id

    //buscar o cleitinho no banco de dados
    const cleitinho = dados.find(cleitinho => cleitinho.id == id) //55 -> undefined  5-> cleitinho vermelho

    if(!cleitinho){
        res.json({
            'mensagem': 'Cleitinho nao encontrado'
        })
    }else{
        res.json({
            'mensagem': 'Cleitinho encontrado',
            'cleitinho': cleitinho
        })
    }
    
})

app.post('/cleitinho', (req, res)=>{
    //trazer as informações passadas no corpo da requisição
    const {nome, idade, cor} = req.body
    //verificar se todos os atributos foram passados
    if(!nome || !idade || !cor){
        res.json({
            'mensagem': 'Todos os atributos devem ser passados. Nome, idade e cor'
        })
        return
    }
    //caso todos os campos estejam preenchidos prosseguir com o crud
    const cleitinho = {
        id: dados.length + 1, //id do novo cleitinho
        nome,
        idade,
        cor
    }
    //cadastrar o cleitinho no banco de dados
    dados.push(cleitinho)
    console.log(dados)

    res.json({
        'mensagem': 'Cleitinho criado com sucesso',
        'cleitinho': cleitinho,
        'todosOscleitinhos': dados
    })

} )






//criar o servidor
//app.listen(Porta, Função de callback)
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000. Acesse http://localhost:3000')
})