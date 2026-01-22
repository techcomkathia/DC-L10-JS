const Usuario = require('./Usuario');
const Estacionamento = require('./Estacionamento');
const Veiculo = require('./Veiculo');
const Movimentacao = require('./Movimentacao');
const TabelaPrecos = require('./TabelaPrecos');

// Associações baseadas no contexto do projeto

// Usuario 1 → N Movimentacoes
Usuario.hasMany(Movimentacao, { foreignKey: 'usuario_id', as: 'movimentacoes' });
Movimentacao.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });

// Estacionamento 1 → N Movimentacoes
Estacionamento.hasMany(Movimentacao, { foreignKey: 'estacionamento_id', as: 'movimentacoes' });
Movimentacao.belongsTo(Estacionamento, { foreignKey: 'estacionamento_id', as: 'estacionamento' });

// Estacionamento 1 → N TabelaPrecos
Estacionamento.hasMany(TabelaPrecos, { foreignKey: 'estacionamento_id', as: 'precos' });
TabelaPrecos.belongsTo(Estacionamento, { foreignKey: 'estacionamento_id', as: 'estacionamento' });

// Veiculo 1 → N Movimentacoes
Veiculo.hasMany(Movimentacao, { foreignKey: 'veiculo_id', as: 'movimentacoes' });
Movimentacao.belongsTo(Veiculo, { foreignKey: 'veiculo_id', as: 'veiculo' });

// Exportar para uso no database/index.js
module.exports = {
  Usuario,
  Estacionamento,
  Veiculo,
  Movimentacao,
  TabelaPrecos
};