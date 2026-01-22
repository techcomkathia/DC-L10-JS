const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Movimentacao = sequelize.define('Movimentacao', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    veiculo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'veiculos',
        key: 'id'
      }
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    estacionamento_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estacionamentos',
        key: 'id'
      }
    },
    entrada: {
      type: DataTypes.DATE,
      allowNull: false
    },
    saida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valor_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    status_pagamento: {
      type: DataTypes.ENUM('pago', 'pendente'),
      allowNull: true
    }
  }, {
    tableName: 'movimentacoes',
    timestamps: true
  });

  return Movimentacao;
};