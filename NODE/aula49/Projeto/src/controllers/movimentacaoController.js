const movimentacaoService = require('../services/movimentacaoService');

module.exports = {
  async registrarEntrada(req, res, next) {
    try {
      const { veiculo_id, usuario_id, estacionamento_id } = req.body;
      const movimentacao = await movimentacaoService.registrarEntrada(veiculo_id, usuario_id, estacionamento_id);
      res.status(201).json(movimentacao);
    } catch (err) {
      next(err);
    }
  },
  async registrarSaida(req, res, next) {
    try {
      const { veiculo_id, usuario_id } = req.body;
      const movimentacao = await movimentacaoService.registrarSaida(veiculo_id, usuario_id);
      res.json(movimentacao);
    } catch (err) {
      next(err);
    }
  },
  async listarEstacionados(req, res, next) {
    try {
      const { estacionamento_id } = req.query;
      const lista = await movimentacaoService.listarEstacionados(estacionamento_id);
      res.json(lista);
    } catch (err) {
      next(err);
    }
  },
  async listarHistorico(req, res, next) {
    try {
      const filtros = req.query;
      const lista = await movimentacaoService.listarHistorico(filtros);
      res.json(lista);
    } catch (err) {
      next(err);
    }
  },
  async calcularFaturamento(req, res, next) {
    try {
      const { estacionamento_id, data_inicio, data_fim } = req.query;
      const result = await movimentacaoService.calcularFaturamento(estacionamento_id, data_inicio, data_fim);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
};