const TabelaPrecos = require('../models/TabelaPrecos');

class TabelaPrecosService {
  // Cadastrar preço para tipo de veículo em um estacionamento
  async create(data) {
    // Verifica se já existe preço para este tipo no estacionamento
    const existente = await TabelaPrecos.findOne({
      where: { estacionamento_id: data.estacionamento_id, tipo_veiculo: data.tipo_veiculo }
    });
    if (existente) {
      throw new Error('Preço já definido para este tipo de veículo neste estacionamento');
    }

    const preco = await TabelaPrecos.create(data);
    return preco;
  }

  // Listar preços (por estacionamento opcional)
  async findAll(estacionamento_id = null) {
    const where = estacionamento_id ? { estacionamento_id } : {};
    return await TabelaPrecos.findAll({ where });
  }

  // Buscar preço por ID
  async findById(id) {
    const preco = await TabelaPrecos.findByPk(id);
    if (!preco) {
      throw new Error('Preço não encontrado');
    }
    return preco;
  }

  // Atualizar preço
  async update(id, data) {
    const preco = await TabelaPrecos.findByPk(id);
    if (!preco) {
      throw new Error('Preço não encontrado');
    }

    await preco.update(data);
    return preco;
  }

  // Deletar preço
  async delete(id) {
    const preco = await TabelaPrecos.findByPk(id);
    if (!preco) {
      throw new Error('Preço não encontrado');
    }

    await preco.destroy();
    return { message: 'Preço deletado com sucesso' };
  }
}

module.exports = new TabelaPrecosService();