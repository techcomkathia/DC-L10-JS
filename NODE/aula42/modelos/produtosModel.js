// representação da tabela produtos

//1º passo importação do objeto sequelize que foi configurado no arquivo configBancoDados.js
const sequelize = require('../config/configBancoDados')
//2º passo importação do objeto DataTypes do módulo sequelize
const { DataTypes } = require('sequelize')

// nome da tabela e seus atributos no formato objeto
const Produtos = sequelize.define('produtos', {
    //nomeDaColuna: tipoDeDado e restricoes
    idProduto:{
        type: DataTypes.INTEGER, //tipo de dado
        primaryKey: true, // restricao de chave primaria, padrão false e só é trocado para true na coluna de chave primaria
        autoIncrement: true //restricao de auto incremento, padrão false e seria trocado para true na coluna de chave primaria
    },
    nome : {
        type: DataTypes.STRING(100), //padrão 255 quando não especificado
        allowNull: false, //padrão true
        unique: true //padrão false
    },
    departamento:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    preco:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    quantidade:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estoque:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = Produtos