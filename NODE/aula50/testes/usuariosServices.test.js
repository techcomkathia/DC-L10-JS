const usuariosServices = require('../servicos/usuariosServices');

// Mock do modelo de usuário
jest.mock('../modelo/UsuariosModel', () => ({
  create: jest.fn(),
  findByPk: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

const usuarioModel = require('../modelo/UsuariosModel');
const bcrypt = require('bcrypt');

jest.mock('bcrypt');

describe('Serviços de Usuários', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('criarUsuario', () => {
    it('deve criar um usuário com sucesso', async () => {
      bcrypt.hash.mockResolvedValue('senhaHash');
      usuarioModel.create.mockResolvedValue({ dataValues: { id: 1, nome: 'João', email: 'joao@email.com' } });
      const resultado = await usuariosServices.criarUsuario({ nome: 'João', email: 'joao@email.com', senha: '123' });
      expect(resultado.dados).toEqual({ id: 1, nome: 'João', email: 'joao@email.com' });
      expect(resultado.mensagem).toBe('Usuário criado com sucesso');
    });
    it('deve retornar erro ao criar usuário', async () => {
      bcrypt.hash.mockRejectedValue(new Error('Erro hash'));
      const resultado = await usuariosServices.criarUsuario({ nome: 'João', email: 'joao@email.com', senha: '123' });
      expect(resultado.mensagem).toBe('Erro ao criar usuário serviço');
      expect(resultado.erro).toBe('Erro hash');
    });
  });

  describe('buscarUsuarioPorId', () => {
    it('deve retornar usuário encontrado', async () => {
      usuarioModel.findByPk.mockResolvedValue({ dataValues: { id: 2, nome: 'Maria', email: 'maria@email.com' } });
      const resultado = await usuariosServices.buscarUsuarioPorId(2);
      expect(resultado.dados).toEqual({ id: 2, nome: 'Maria', email: 'maria@email.com' });
    });
    it('deve retornar mensagem de não encontrado', async () => {
      usuarioModel.findByPk.mockResolvedValue(null);
      const resultado = await usuariosServices.buscarUsuarioPorId(99);
      expect(resultado.mensagem).toBe('Usuário não encontrado');
    });
    it('deve retornar erro ao buscar usuário', async () => {
      usuarioModel.findByPk.mockRejectedValue(new Error('Falha DB'));
      const resultado = await usuariosServices.buscarUsuarioPorId(1);
      expect(resultado.mensagem).toBe('Erro ao buscar usuário');
      expect(resultado.erro).toBe('Falha DB');
    });
  });

  describe('buscarTodosUsuarios', () => {
    it('deve retornar lista de usuários', async () => {
      usuarioModel.findAll.mockResolvedValue([
        { dataValues: { id: 1, nome: 'A', email: 'a@email.com' } },
        { dataValues: { id: 2, nome: 'B', email: 'b@email.com' } },
      ]);
      const resultado = await usuariosServices.buscarTodosUsuarios();
      expect(resultado.dados).toEqual([
        { id: 1, nome: 'A', email: 'a@email.com' },
        { id: 2, nome: 'B', email: 'b@email.com' },
      ]);
    });
    it('deve retornar erro ao buscar todos', async () => {
      usuarioModel.findAll.mockRejectedValue(new Error('Falha geral'));
      const resultado = await usuariosServices.buscarTodosUsuarios();
      expect(resultado.mensagem).toBe('Erro ao buscar usuários');
      expect(resultado.erro).toBe('Falha geral');
    });
  });

  describe('buscarUsuarioPorEmail', () => {
    it('deve retornar usuário pelo email', async () => {
      usuarioModel.findOne.mockResolvedValue({ dataValues: { id: 3, nome: 'Ana', email: 'ana@email.com', senha: 'hash' } });
      const resultado = await usuariosServices.buscarUsuarioPorEmail('ana@email.com');
      expect(resultado.dados).toEqual({ id: 3, nome: 'Ana', email: 'ana@email.com', senha: 'hash' });
    });
    it('deve retornar null se não encontrar', async () => {
      usuarioModel.findOne.mockResolvedValue(null);
      const resultado = await usuariosServices.buscarUsuarioPorEmail('naoexiste@email.com');
      expect(resultado).toBeNull();
    });
    it('deve retornar erro ao buscar por email', async () => {
      usuarioModel.findOne.mockRejectedValue(new Error('Erro email'));
      const resultado = await usuariosServices.buscarUsuarioPorEmail('erro@email.com');
      expect(resultado.mensagem).toBe('Erro ao buscar usuário');
      expect(resultado.erro).toBe('Erro email');
    });
  });

  describe('atualizarUsuario', () => {
    it('deve atualizar usuário com sucesso', async () => {
      usuarioModel.update.mockResolvedValue([1]);
      const resultado = await usuariosServices.atualizarUsuario(1, { nome: 'Novo' });
      expect(resultado.mensagem).toBe('Usuário atualizado com sucesso');
    });
    it('deve retornar não encontrado ao atualizar', async () => {
      usuarioModel.update.mockResolvedValue([0]);
      const resultado = await usuariosServices.atualizarUsuario(99, { nome: 'Novo' });
      expect(resultado.mensagem).toBe('Usuário não encontrado');
    });
    it('deve retornar erro ao atualizar', async () => {
      usuarioModel.update.mockRejectedValue(new Error('Erro update'));
      const resultado = await usuariosServices.atualizarUsuario(1, { nome: 'Novo' });
      expect(resultado.mensagem).toBe('Erro ao atualizar usuário');
      expect(resultado.erro).toBe('Erro update');
    });
  });

  describe('excluirUsuario', () => {
    it('deve excluir usuário com sucesso', async () => {
      usuarioModel.destroy.mockResolvedValue(1);
      const resultado = await usuariosServices.excluirUsuario(1);
      expect(resultado.sucesso).toBe('Usuário excluído com sucesso');
    });
    it('deve retornar não encontrado ao excluir', async () => {
      usuarioModel.destroy.mockResolvedValue(0);
      const resultado = await usuariosServices.excluirUsuario(99);
      expect(resultado.erro).toBe('Usuário não encontrado');
    });
    it('deve retornar erro ao excluir', async () => {
      usuarioModel.destroy.mockRejectedValue(new Error('Erro delete'));
      const resultado = await usuariosServices.excluirUsuario(1);
      expect(resultado.mensagem).toBe('Erro ao excluir usuário');
      expect(resultado.erro).toBe('Erro delete');
    });
  });
});
