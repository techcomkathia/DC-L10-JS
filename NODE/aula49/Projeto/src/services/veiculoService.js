const Veiculo = require('../models/Veiculo');

class VeiculoService {
  // Cadastrar novo veículo (verifica placa única)
  async create(data) {
    // Verifica se a placa já existe
    const existente = await Veiculo.findOne({ where: { placa: data.placa } });
    if (existente) {
      throw new Error('Placa já cadastrada');
    }

    const veiculo = await Veiculo.create(data);
    return veiculo;
  }

  // Listar todos os veículos
  async findAll() {
    return await Veiculo.findAll();
  }

  // Buscar veículo por ID
  async findById(id) {
    const veiculo = await Veiculo.findByPk(id);
    if (!veiculo) {
      throw new Error('Veículo não encontrado');
    }
    return veiculo;
  }

  // Buscar veículo por placa
  async findByPlaca(placa) {
    const veiculo = await Veiculo.findOne({ where: { placa } });
    if (!veiculo) {
      throw new Error('Veículo não encontrado');
    }
    return veiculo;
  }

  // Atualizar veículo
  async update(id, data) {
    const veiculo = await Veiculo.findByPk(id);
    if (!veiculo) {
      throw new Error('Veículo não encontrado');
    }

    // Se placa for alterada, verifica unicidade
    if (data.placa && data.placa !== veiculo.placa) {
      const existente = await Veiculo.findOne({ where: { placa: data.placa } });
      if (existente) {
        throw new Error('Placa já cadastrada');
      }
    }

    await veiculo.update(data);
    return veiculo;
  }

  // Deletar veículo
  async delete(id) {
    const veiculo = await Veiculo.findByPk(id);
    if (!veiculo) {
      throw new Error('Veículo não encontrado');
    }

    await veiculo.destroy();
    return { message: 'Veículo deletado com sucesso' };
  }
}

module.exports = new VeiculoService();