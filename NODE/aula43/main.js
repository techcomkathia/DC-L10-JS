const sequelize = require('./config/configBanco')
//importação dos modelos que devem ser sincronizados com o banco de dados
const { Livros, Autores, Categorias } = require('./modelos/relacionamentos')


//testar a conexão e a sincronização das tabelas com o banco de dados

sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados'))
    .then(() => sequelize.sync({alter: true}))
    .catch((error) => console.log('Erro ao conectar ao banco de dados', error))