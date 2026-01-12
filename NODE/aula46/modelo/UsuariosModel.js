const sequelize = require('./configBanco')
const { DataTypes } = require('sequelize');

const UsuariosModel = sequelize.define('usuarios',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,        
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
})

module.exports = UsuariosModel