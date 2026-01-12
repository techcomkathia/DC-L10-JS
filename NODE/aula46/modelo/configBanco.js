const Sequelize = require('sequelize');

//criar uma instancia do sequelize
//parametros : nome do banco, nome do usuario, senha, objeto de configuracoes(host, dialect, porta)
const sequelize= new Sequelize('aula44','root','km2015',{
    host:'localhost',
    dialect:'mysql',
    port:3306
})

module.exports=sequelize;