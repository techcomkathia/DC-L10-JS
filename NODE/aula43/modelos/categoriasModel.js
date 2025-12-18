//importações
const sequelize = require('../config/configBanco') //objeto com as credenciais do banco de dados
const { DataTypes } = require('sequelize') //importação do objeto DataTypes do módulo sequelize
const Livros = require('./livrosModel')

const Categorias = sequelize.define('categorias', {
    id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }
},
//DESATIVAR A CRIACAO DAS COLUNAS DE DATA DE CRIACAO E ATUALIZACAO
// {
//     timestamps: false
// }
)





module.exports = Categorias