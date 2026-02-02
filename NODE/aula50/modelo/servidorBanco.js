const sequelize = require('./configBanco')
const UsuariosModel = require('./UsuariosModel')
const ProdutosModel = require('./ProdutosModel')

//sincronizar os modelos com o banco de dados
//criar as tabelas no banco de dados com base nos modelos definidos
//método sync() cria a tabela no banco de dados se ela não existir
//método authenticate() testa a conexão com o banco de dados
sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados'))
    .then(() => {
        sequelize.sync(
            {alter:true} //sincroniza o modelo com a tabela do banco de dados sem apagar os dados já existentes
            //modifica a tabela para que fique igual ao modelo definido no código'
        )
        .then(() => {
            console.log('Tabelas sincronizadas com o banco de dados')
        })
        .catch((erro) => {
            console.log('Erro ao sincronizar as tabelas: ' + erro)
        })
    })
    .catch((erro) => {
        console.log('Erro ao conectar ao banco de dados: ' + erro)
    })


module.exports = {UsuariosModel, ProdutosModel, sequelize}
