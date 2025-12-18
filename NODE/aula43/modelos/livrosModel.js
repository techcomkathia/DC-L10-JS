//importações 
const sequelize = require('../config/configBanco') //objeto com as credenciais do banco de dados
const { DataTypes } = require('sequelize') //importação do objeto DataTypes do módulo sequelize
const Categorias = require('./categoriasModel')
const Autores = require('./autoresModel')

//importação dos dois modelos que serão referenciados como chaves estrangeiras


const Livros = sequelize.define('livros', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ano_publicacao:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //chaves estrangeiras
    autor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Autores,
            key: 'id_autor'
        }
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categorias,
            key: 'id_categoria'
        }
    }
},
// {
//     timestamps: false
// }
)


// Livros.belongsTo(Autores) //um ou mais livros pertencem a um autor 
// Livros.belongsTo(Categorias) //um ou mais livros pertencem a uma categoria 



// Autores.hasMany(Livros) //um autor pode ter um ou muitos livros (1,n)
// Categorias.hasMany(Livros) //uma categoria pode ter um ou muitos livros(1,n)

Livros.belongsToMany(Autores, {
    through: 'livros_autores',
    as: 'autores',
    foreignKey: 'livro_id'
})

Livros.belongsToMany(Categorias, {
    through: 'livros_categorias',
    as: 'categorias',
    foreignKey: 'livro_id'
})

module.exports = Livros