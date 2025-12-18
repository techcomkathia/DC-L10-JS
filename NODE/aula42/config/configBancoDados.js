//1º passo : importar o sequelize
const Sequelize = require('sequelize')

//2º passo : criar uma instancia do sequelize
//nome do banco, nome do usuario, senha
const sequelize = new Sequelize('magazineCleitinho', 'root', 'km2015',
    {
        host: 'localhost', //127.0.0.1
        dialect: 'mysql', //nome do sgbd escolhido
        port: 3306
        //logging: false //desligar o log do sequelize no console
    }
)

//testar a conexão com o banco de dados
/*sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch((error) => console.log('Erro ao conectar ao banco de dados', error))*/

//exportar o sequelize
module.exports = sequelize