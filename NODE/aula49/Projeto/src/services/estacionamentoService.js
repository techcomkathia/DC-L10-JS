const Estacionamento = require('../models/Estacionamento');

class EstacionamentoService {
  // Cadastrar novo estacionamento
  async create(data) {
    // Valida se total_vagas = vagas_carro + vagas_moto
    if (data.total_vagas !== data.vagas_carro + data.vagas_moto) {
      throw new Error('Total de vagas deve ser igual à soma de vagas de carro e moto');
    }

    const estacionamento = await Estacionamento.create(data);
    return estacionamento;
  }

  // Listar todos os estacionamentos
  async findAll() {
    return await Estacionamento.findAll();
  }

  // Buscar estacionamento por ID
  async findById(id) {
    const estacionamento = await Estacionamento.findByPk(id);
    if (!estacionamento) {
      throw new Error('Estacionamento não encontrado');
    }
    return estacionamento;
  }

  // Atualizar estacionamento
  async update(id, data) {
    const estacionamento = await Estacionamento.findByPk(id);
    if (!estacionamento) {
      throw new Error('Estacionamento não encontrado');
    }

    // Valida novamente se total_vagas for alterado
    if (data.total_vagas && data.total_vagas !== (data.vagas_carro || estacionamento.vagas_carro) + (data.vagas_moto || estacionamento.vagas_moto)) {
      throw new Error('Total de vagas deve ser igual à soma de vagas de carro e moto');
    }

    await estacionamento.update(data);
    return estacionamento;
  }

  // Deletar estacionamento
  async delete(id) {
    const estacionamento = await Estacionamento.findByPk(id);
    if (!estacionamento) {
      throw new Error('Estacionamento não encontrado');
    }

    await estacionamento.destroy();
    return { message: 'Estacionamento deletado com sucesso' };
  }
}

module.exports = new EstacionamentoService();