const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TabelaPrecos = sequelize.define('TabelaPrecos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo_veiculo: {
      type: DataTypes.ENUM('carro', 'moto'),
      allowNull: false
    },
    valor_hora: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    estacionamento_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estacionamentos',
        key: 'id'
      }
    }
  }, {
    tableName: 'tabela_precos',
    timestamps: true
  });

  return TabelaPrecos;
};