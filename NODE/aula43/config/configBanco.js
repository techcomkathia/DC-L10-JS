const Sequelize = require('sequelize')

const sequelize = new Sequelize('livraria_api_l10', 'root', 'km2015',
    {
        host: 'localhost', //127.0.0.1
        dialect: 'mysql', //nome do sgbd escolhido
        port: 3306,
        //logging: false //desligar o log do sequelize no console
        //desativar a criação das colunas de data de criação e atualização
        //timestamps: false
    }
)

module.exports = sequelize