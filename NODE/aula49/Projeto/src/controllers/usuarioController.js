const usuarioService = require('../services/usuarioService');

module.exports = {
  async create(req, res, next) {
    try {
      const usuario = await usuarioService.create(req.body);
      res.status(201).json(usuario);
    } catch (err) {
      next(err);
    }
  },
  async findAll(req, res, next) {
    try {
      const usuarios = await usuarioService.findAll();
      res.json(usuarios);
    } catch (err) {
      next(err);
    }
  },
  async findById(req, res, next) {
    try {
      const usuario = await usuarioService.findById(req.params.id);
      res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
  async update(req, res, next) {
    try {
      const usuario = await usuarioService.update(req.params.id, req.body);
      res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
  async deactivate(req, res, next) {
    try {
      const usuario = await usuarioService.deactivate(req.params.id);
      res.json(usuario);
    } catch (err) {
      next(err);
    }
  }
};