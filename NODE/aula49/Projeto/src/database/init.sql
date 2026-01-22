-- Script SQL para criação do banco de dados do Sistema de Gerenciamento de Estacionamento
-- Execute este script em um ambiente MySQL para criar as tabelas e relacionamentos

-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS estacionamento;
USE estacionamento;

-- Tabela de usuários
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  perfil ENUM('Administrador', 'Funcionario') NOT NULL,
  ativo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de estacionamentos
CREATE TABLE estacionamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  endereco TEXT NOT NULL,
  total_vagas INT NOT NULL,
  vagas_carro INT NOT NULL,
  vagas_moto INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de veículos
CREATE TABLE veiculos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  placa VARCHAR(10) UNIQUE NOT NULL,
  modelo VARCHAR(255) NOT NULL,
  cor VARCHAR(50) NOT NULL,
  tipo ENUM('carro', 'moto') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de tabela_precos
CREATE TABLE tabela_precos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo_veiculo ENUM('carro', 'moto') NOT NULL,
  valor_hora DECIMAL(10, 2) NOT NULL,
  estacionamento_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (estacionamento_id) REFERENCES estacionamentos(id) ON DELETE CASCADE
);

-- Tabela de movimentações
CREATE TABLE movimentacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  veiculo_id INT NOT NULL,
  usuario_id INT NOT NULL,
  estacionamento_id INT NOT NULL,
  entrada DATETIME NOT NULL,
  saida DATETIME NULL,
  valor_total DECIMAL(10, 2) NULL,
  status_pagamento ENUM('pago', 'pendente') NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (veiculo_id) REFERENCES veiculos(id) ON DELETE CASCADE,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (estacionamento_id) REFERENCES estacionamentos(id) ON DELETE CASCADE
);

-- Índices para otimização (opcional, mas recomendado)
CREATE INDEX idx_movimentacoes_veiculo ON movimentacoes(veiculo_id);
CREATE INDEX idx_movimentacoes_usuario ON movimentacoes(usuario_id);
CREATE INDEX idx_movimentacoes_estacionamento ON movimentacoes(estacionamento_id);
CREATE INDEX idx_tabela_precos_estacionamento ON tabela_precos(estacionamento_id);