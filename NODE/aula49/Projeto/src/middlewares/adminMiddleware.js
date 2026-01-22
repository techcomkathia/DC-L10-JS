module.exports = function (req, res, next) {
  if (req.user && req.user.perfil === 'Administrador') {
    return next();
  }
  return res.status(403).json({ error: 'Acesso restrito a administradores' });
};