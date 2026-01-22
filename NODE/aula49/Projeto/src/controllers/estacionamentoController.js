const estacionamentoService = require('../services/estacionamentoService');

module.exports = {
  async create(req, res, next) {
    try {
      const estacionamento = await estacionamentoService.create(req.body);
      res.status(201).json(estacionamento);
    } catch (err) {
      next(err);
    }
  },
  async findAll(req, res, next) {
    try {
      const estacionamentos = await estacionamentoService.findAll();
      res.json(estacionamentos);
    } catch (err) {
      next(err);
    }
  },
  async findById(req, res, next) {
    try {
      const estacionamento = await estacionamentoService.findById(req.params.id);
      res.json(estacionamento);
    } catch (err) {
      next(err);
    }
  },
  async update(req, res, next) {
    try {
      const estacionamento = await estacionamentoService.update(req.params.id, req.body);
      res.json(estacionamento);
    } catch (err) {
      next(err);
    }
  },
  async delete(req, res, next) {
    try {
      const result = await estacionamentoService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
};