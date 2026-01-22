const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

class UsuarioService {
  // Cadastrar novo usuário (apenas Administrador)
  async create(data) {
    // Criptografa a senha antes de salvar
    const hashedSenha = await bcrypt.hash(data.senha, 10);
    data.senha = hashedSenha;

    // Cria o usuário
    const usuario = await Usuario.create(data);
    return usuario;
  }

  // Listar todos os usuários (apenas Administrador)
  async findAll() {
    return await Usuario.findAll({ attributes: { exclude: ['senha'] } }); // Não retorna senha
  }

  // Buscar usuário por ID
  async findById(id) {
    const usuario = await Usuario.findByPk(id, { attributes: { exclude: ['senha'] } });
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }
    return usuario;
  }

  // Atualizar usuário (apenas Administrador)
  async update(id, data) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    // Se senha for fornecida, criptografa
    if (data.senha) {
      data.senha = await bcrypt.hash(data.senha, 10);
    }

    await usuario.update(data);
    return usuario;
  }

  // Desativar usuário (apenas Administrador) - soft delete
  async deactivate(id) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    await usuario.update({ ativo: false });
    return usuario;
  }
}

module.exports = new UsuarioService();