const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Veiculo = sequelize.define('Veiculo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM('carro', 'moto'),
      allowNull: false
    }
  }, {
    tableName: 'veiculos',
    timestamps: true
  });

  return Veiculo;
};