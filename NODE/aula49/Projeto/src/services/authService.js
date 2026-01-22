const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

class AuthService {
  // Método para login: verifica email/senha e gera token JWT
  async login(email, senha) {
    // Busca o usuário pelo email
    const usuario = await Usuario.findOne({ where: { email, ativo: true } });
    if (!usuario) {
      throw new Error('Usuário não encontrado ou inativo');
    }

    // Verifica a senha criptografada
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      throw new Error('Senha incorreta');
    }

    // Gera o token JWT com id, nome e perfil
    const token = jwt.sign(
      { id: usuario.id, nome: usuario.nome, perfil: usuario.perfil },
      process.env.JWT_SECRET,
      { expiresIn: '8h' } // Token válido por 8 horas
    );

    return { token, usuario: { id: usuario.id, nome: usuario.nome, perfil: usuario.perfil } };
  }
}

module.exports = new AuthService();