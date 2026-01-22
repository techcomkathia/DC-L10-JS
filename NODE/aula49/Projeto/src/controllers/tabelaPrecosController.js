const tabelaPrecosService = require('../services/tabelaPrecosService');

module.exports = {
  async create(req, res, next) {
    try {
      const preco = await tabelaPrecosService.create(req.body);
      res.status(201).json(preco);
    } catch (err) {
      next(err);
    }
  },
  async findAll(req, res, next) {
    try {
      const { estacionamento_id } = req.query;
      const precos = await tabelaPrecosService.findAll(estacionamento_id);
      res.json(precos);
    } catch (err) {
      next(err);
    }
  },
  async findById(req, res, next) {
    try {
      const preco = await tabelaPrecosService.findById(req.params.id);
      res.json(preco);
    } catch (err) {
      next(err);
    }
  },
  async update(req, res, next) {
    try {
      const preco = await tabelaPrecosService.update(req.params.id, req.body);
      res.json(preco);
    } catch (err) {
      next(err);
    }
  },
  async delete(req, res, next) {
    try {
      const result = await tabelaPrecosService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
};