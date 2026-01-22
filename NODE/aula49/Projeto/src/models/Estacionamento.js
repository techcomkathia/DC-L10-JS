const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Estacionamento = sequelize.define('Estacionamento', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endereco: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    total_vagas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vagas_carro: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vagas_moto: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'estacionamentos',
    timestamps: true
  });

  return Estacionamento;
};