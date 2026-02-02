//importar o express
//importar o arquivo de configuração do servidor do banco de dados
const express = require('express')
const {sequelize} = require('./modelo/servidorBanco')
//para executar as funções definidas no arquivo servidorBanco.js ( teste de conexão e sincronização dos modelos com o banco de dados)
const loginController = require('./controladores/loginController')
//importar as rotas de usuários
const usuariosRotas = require('./rotas/usuariosRotas')


const app = express()
app.use(express.json()) //middleware para interpretar JSON nas requisições

//criar uma rota para teste
app.get('/', (req, res) => res.json({mensagem: 'Servidor rodando com Express e Sequelize'}))
//criar um servidor web utilizando o express'

//configurar o uso das rotas de usuários no servidor
//o método use para configurar o middleware de rotas recebe como parametro o caminho da rota raiz para o recurso (neste caso /usuarios) e o router importado do arquivo de rotas
app.use('/usuarios', usuariosRotas)
app.post('/login', loginController.postLogin)

app.listen(3000,() => {
    console.log('Servidor rodando na porta 3000. http://localhost:3000')
})