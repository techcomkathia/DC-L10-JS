//importação    
const sequelize = require('../config/configBanco') //objeto com as credenciais do banco de dados
const { DataTypes } = require('sequelize') //importação do objeto DataTypes do módulo sequelize
const Livros = require('./livrosModel')

// tabela com apenas a chave primária
const Autores = sequelize.define('autores', {
    id_autor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    nacionalidade: {
        type: DataTypes.STRING(50)
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
//DESATIVAR A CRIACAO DAS COLUNAS DE DATA DE CRIACAO E ATUALIZACAO
/*{
    timestamps: false
}*/)




Livros.belongsTo(Autores) //um ou mais livros pertencem a um autor 

Autores.hasMany(Livros) //um autor pode ter um ou muitos livros (1,n)
module.exports = Autores