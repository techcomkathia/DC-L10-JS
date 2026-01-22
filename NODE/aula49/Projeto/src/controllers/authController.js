const authService = require('../services/authService');

module.exports = {
  async login(req, res, next) {
    try {
      const { email, senha } = req.body;
      const result = await authService.login(email, senha);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
};