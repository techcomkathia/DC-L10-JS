const veiculoService = require('../services/veiculoService');

module.exports = {
  async create(req, res, next) {
    try {
      const veiculo = await veiculoService.create(req.body);
      res.status(201).json(veiculo);
    } catch (err) {
      next(err);
    }
  },
  async findAll(req, res, next) {
    try {
      const veiculos = await veiculoService.findAll();
      res.json(veiculos);
    } catch (err) {
      next(err);
    }
  },
  async findById(req, res, next) {
    try {
      const veiculo = await veiculoService.findById(req.params.id);
      res.json(veiculo);
    } catch (err) {
      next(err);
    }
  },
  async findByPlaca(req, res, next) {
    try {
      const veiculo = await veiculoService.findByPlaca(req.params.placa);
      res.json(veiculo);
    } catch (err) {
      next(err);
    }
  },
  async update(req, res, next) {
    try {
      const veiculo = await veiculoService.update(req.params.id, req.body);
      res.json(veiculo);
    } catch (err) {
      next(err);
    }
  },
  async delete(req, res, next) {
    try {
      const result = await veiculoService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
};