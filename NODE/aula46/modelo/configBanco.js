const Sequelize = require('sequelize');
//importar o dotenv
require('dotenv').config();
//criar uma instancia do sequelize
//parametros : nome do banco, nome do usuario, senha, objeto de configuracoes(host, dialect, porta)
// const sequelize= new Sequelize('aula44','root','km2015',{
//     host:'localhost',
//     dialect:'mysql',
//     port:3306
// })
console.log(process.env.DB_NAME);
const sequelize= new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
    port:process.env.DB_PORT
})

module.exports=sequelize;

// os dados relacionados a localização do banco, credenciais de acesso, etc são dados sensiveis
// e por isso não devem ficar expostos no código fonte
// em projetos reais, utilize variaveis de ambiente para armazenar esses dados
//UTILIZE PACOTE DOTENV PARA ISSO