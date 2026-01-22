const Movimentacao = require('../models/Movimentacao');
const Veiculo = require('../models/Veiculo');
const Estacionamento = require('../models/Estacionamento');
const TabelaPrecos = require('../models/TabelaPrecos');
const { Op } = require('sequelize');

class MovimentacaoService {
  // Registrar entrada de veículo
  async registrarEntrada(veiculo_id, usuario_id, estacionamento_id) {
    // Verifica se veículo existe
    const veiculo = await Veiculo.findByPk(veiculo_id);
    if (!veiculo) {
      throw new Error('Veículo não encontrado');
    }

    // Verifica se há movimentação aberta para este veículo
    const aberta = await Movimentacao.findOne({
      where: { veiculo_id, saida: null }
    });
    if (aberta) {
      throw new Error('Veículo já está estacionado');
    }

    // Verifica vagas disponíveis no estacionamento
    const estacionamento = await Estacionamento.findByPk(estacionamento_id);
    if (!estacionamento) {
      throw new Error('Estacionamento não encontrado');
    }

    // Conta veículos estacionados por tipo
    const estacionadosCarro = await Movimentacao.count({
      where: { estacionamento_id, saida: null },
      include: [{ model: Veiculo, where: { tipo: 'carro' } }]
    });
    const estacionadosMoto = await Movimentacao.count({
      where: { estacionamento_id, saida: null },
      include: [{ model: Veiculo, where: { tipo: 'moto' } }]
    });

    if (veiculo.tipo === 'carro' && estacionadosCarro >= estacionamento.vagas_carro) {
      throw new Error('Não há vagas disponíveis para carro');
    }
    if (veiculo.tipo === 'moto' && estacionadosMoto >= estacionamento.vagas_moto) {
      throw new Error('Não há vagas disponíveis para moto');
    }

    // Registra entrada
    const movimentacao = await Movimentacao.create({
      veiculo_id,
      usuario_id,
      estacionamento_id,
      entrada: new Date()
    });

    return movimentacao;
  }

  // Registrar saída de veículo
  async registrarSaida(veiculo_id, usuario_id) {
    // Busca movimentação aberta para o veículo
    const movimentacao = await Movimentacao.findOne({
      where: { veiculo_id, saida: null },
      include: [Veiculo, Estacionamento]
    });
    if (!movimentacao) {
      throw new Error('Movimentação de entrada não encontrada para este veículo');
    }

    // Calcula tempo e valor
    const saida = new Date();
    const tempoHoras = (saida - movimentacao.entrada) / (1000 * 60 * 60); // em horas
    const preco = await TabelaPrecos.findOne({
      where: { estacionamento_id: movimentacao.estacionamento_id, tipo_veiculo: movimentacao.Veiculo.tipo }
    });
    if (!preco) {
      throw new Error('Preço não definido para este tipo de veículo no estacionamento');
    }

    const valorTotal = Math.ceil(tempoHoras) * preco.valor_hora; // Arredonda para cima

    // Atualiza movimentação
    await movimentacao.update({
      saida,
      valor_total: valorTotal,
      status_pagamento: 'pendente' // Pode ser alterado para 'pago' se pago na saída
    });

    return movimentacao;
  }

  // Listar veículos estacionados (sem saída)
  async listarEstacionados(estacionamento_id) {
    return await Movimentacao.findAll({
      where: { estacionamento_id, saida: null },
      include: [Veiculo, { model: require('../models/Usuario'), attributes: ['nome'] }]
    });
  }

  // Listar histórico de movimentações
  async listarHistorico(filtros = {}) {
    const where = {};
    if (filtros.estacionamento_id) where.estacionamento_id = filtros.estacionamento_id;
    if (filtros.data_inicio) where.entrada = { [Op.gte]: filtros.data_inicio };
    if (filtros.data_fim) where.saida = { [Op.lte]: filtros.data_fim };

    return await Movimentacao.findAll({
      where,
      include: [Veiculo, Estacionamento, { model: require('../models/Usuario'), attributes: ['nome'] }],
      order: [['entrada', 'DESC']]
    });
  }

  // Calcular faturamento por período
  async calcularFaturamento(estacionamento_id, data_inicio, data_fim) {
    const movimentacoes = await Movimentacao.findAll({
      where: {
        estacionamento_id,
        saida: { [Op.between]: [data_inicio, data_fim] },
        status_pagamento: 'pago'
      }
    });

    const total = movimentacoes.reduce((sum, mov) => sum + parseFloat(mov.valor_total || 0), 0);
    return { total, quantidade: movimentacoes.length };
  }
}

module.exports = new MovimentacaoService();