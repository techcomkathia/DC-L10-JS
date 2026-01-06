// no arquivo do modelo será utilizado o objeto do sequelize criado no arquivo de configuração do banco
// importação do objeto DataTypes e do objeto sequelize
//definição do modelo com base na tabela do banco de dados
const { DataTypes } = require('sequelize');
const sequelize = require('../modelo/configBanco');
//parâmetros para definição do modelo: nome da tabela e um objeto com os campos da tabela
const ProdutosModel = sequelize.define('produtos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(255),
        
    }
    //dessa forma, o sequelize cria automaticamente os campos createdAt e updatedAt na tabela produtos do banco de dados
},
{
    timestamps:false
})

//automaticamente o sequelize cria dois campos (createdAt e updatedAt) para controle de data de criação e atualização do registro a partir dos métodos executados no modelo
//caso não queira esses campos, deve-se configurar o modelo para desabilitá-los. Inserindo o objeto abaixo como terceiro parâmetro do método define
/*
,{
    timestamps:false
}
*/

//quando a tabela já existir no banco de dados e ela já tiver dados inseridos o sequelize não consegue criar esses dois campos automaticamente. Duas alternativas: 
// 1 - Desabilitar a criação desses campos no modelo adicionando o objeto timestamps:false como terceiro parâmetro do método define
// 2 - Sincronizar o modelo com a tabela do banco de dados sem forçar a criação da tabela, ou seja, sem apagar os dados já existentes. Para isso, utilizar o método sync com o parâmetro alter:true
// criar os campos manualmente na tabela do banco de dados e só então sincronizar o modelo com a tabela do banco de dados utilizando o método sync com o parâmetro alter:true