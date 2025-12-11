let dadosEmpresa = {
  "empresa_dados": {
    "produtos": [
    { "id": 1, "nome": "Smart TV 55'' 4K", "preco": 2500.00, "departamento": "Eletrônicos", "quantidade": 50, "estoque": true },
    { "id": 2, "nome": "Notebook Gamer Core i7", "preco": 4800.00, "departamento": "Eletrônicos", "quantidade": 25, "estoque": true },
    { "id": 3, "nome": "Fones de Ouvido Bluetooth", "preco": 150.00, "departamento": "Eletrônicos", "quantidade": 150, "estoque": true },
    { "id": 4, "nome": "Console de Última Geração", "preco": 3200.00, "departamento": "Eletrônicos", "quantidade": 10, "estoque": true },
    { "id": 5, "nome": "Câmera DSLR Profissional", "preco": 6500.00, "departamento": "Eletrônicos", "quantidade": 5, "estoque": true },

    { "id": 6, "nome": "Calça Jeans Slim Fit", "preco": 120.00, "departamento": "Vestuário", "quantidade": 200, "estoque": true },
    { "id": 7, "nome": "Camiseta Básica Algodão", "preco": 45.00, "departamento": "Vestuário", "quantidade": 500, "estoque": true },
    { "id": 8, "nome": "Tênis Esportivo Corrida", "preco": 280.00, "departamento": "Vestuário", "quantidade": 80, "estoque": true },
    { "id": 9, "nome": "Jaqueta de Couro Sintético", "preco": 350.00, "departamento": "Vestuário", "quantidade": 30, "estoque": true },
    { "id": 10, "nome": "Meias Cano Curto (3 Pares)", "preco": 25.00, "departamento": "Vestuário", "quantidade": 300, "estoque": true },

    { "id": 11, "nome": "Liquidificador Potente", "preco": 180.00, "departamento": "Eletrodomésticos", "quantidade": 75, "estoque": true },
    { "id": 12, "nome": "Máquina de Café Espresso", "preco": 450.00, "departamento": "Eletrodomésticos", "quantidade": 40, "estoque": true },
    { "id": 13, "nome": "Micro-ondas Digital", "preco": 300.00, "departamento": "Eletrodomésticos", "quantidade": 60, "estoque": true },
    { "id": 14, "nome": "Aspirador de Pó Vertical", "preco": 220.00, "departamento": "Eletrodomésticos", "quantidade": 55, "estoque": true },
    { "id": 15, "nome": "Geladeira Frost Free Inox", "preco": 3500.00, "departamento": "Eletrodomésticos", "quantidade": 15, "estoque": true },

    { "id": 16, "nome": "Shampoo Hidratante", "preco": 35.00, "departamento": "Beleza e Cuidados", "quantidade": 400, "estoque": true },
    { "id": 17, "nome": "Perfume Floral Feminino", "preco": 220.00, "departamento": "Beleza e Cuidados", "quantidade": 90, "estoque": true },
    { "id": 18, "nome": "Creme Facial Anti-Idade", "preco": 110.00, "departamento": "Beleza e Cuidados", "quantidade": 70, "estoque": true },
    { "id": 19, "nome": "Kit Maquiagem Completo", "preco": 180.00, "departamento": "Beleza e Cuidados", "quantidade": 50, "estoque": true },
    { "id": 20, "nome": "Sabonete Líquido Ervas", "preco": 15.00, "departamento": "Beleza e Cuidados", "quantidade": 600, "estoque": true },

    { "id": 21, "nome": "Livro de Ficção Científica", "preco": 50.00, "departamento": "Livros e Mídia", "quantidade": 300, "estoque": true },
    { "id": 22, "nome": "Box Coleção de Filmes Clássicos", "preco": 150.00, "departamento": "Livros e Mídia", "quantidade": 60, "estoque": true },
    { "id": 23, "nome": "Revista Especializada em Games", "preco": 20.00, "departamento": "Livros e Mídia", "quantidade": 100, "estoque": true },
    { "id": 24, "nome": "E-book de Marketing Digital", "preco": 35.00, "departamento": "Livros e Mídia", "quantidade": 0, "estoque": false },
    { "id": 25, "nome": "Disco de Vinil Rock Clássico", "preco": 90.00, "departamento": "Livros e Mídia", "quantidade": 40, "estoque": true },

    { "id": 26, "nome": "Cadeira de Escritório Ergonômica", "preco": 550.00, "departamento": "Móveis e Decoração", "quantidade": 35, "estoque": true },
    { "id": 27, "nome": "Mesa de Jantar 6 Lugares", "preco": 1200.00, "departamento": "Móveis e Decoração", "quantidade": 20, "estoque": true },
    { "id": 28, "nome": "Luminária de Chão Moderna", "preco": 190.00, "departamento": "Móveis e Decoração", "quantidade": 50, "estoque": true }],
    
    "funcionarios": [
      { "nome": "Ana Silva", "email": "ana.silva@empresa.com", "cargo": "Gerente de Logística", "departamento": "Operacional", "salario": 5500.00 },
      { "nome": "Bruno Costa", "email": "bruno.costa@empresa.com", "cargo": "Analista de Estoque", "departamento": "Operacional", "salario": 3200.00 },
      { "nome": "Carlos Mendes", "email": "carlos.mendes@empresa.com", "cargo": "Supervisor de Armazém", "departamento": "Operacional", "salario": 4100.00 },
      
      { "nome": "Daniela Rosa", "email": "daniela.rosa@empresa.com", "cargo": "Diretora de Vendas", "departamento": "Vendas", "salario": 9500.00 },
      { "nome": "Eduardo Lima", "email": "eduardo.lima@empresa.com", "cargo": "Consultor de Vendas Sênior", "departamento": "Vendas", "salario": 4800.00 },
      { "nome": "Fernanda Alves", "email": "fernanda.alves@empresa.com", "cargo": "Assistente Comercial", "departamento": "Vendas", "salario": 2800.00 },
      
      { "nome": "Gustavo Ferreira", "email": "gustavo.ferreira@empresa.com", "cargo": "Contador Chefe", "departamento": "Financeiro", "salario": 7200.00 },
      { "nome": "Heloísa Gomes", "email": "heloisa.gomes@empresa.com", "cargo": "Analista Financeiro Júnior", "departamento": "Financeiro", "salario": 3500.00 },
      { "nome": "Igor Santos", "email": "igor.santos@empresa.com", "cargo": "Tesoureiro", "departamento": "Financeiro", "salario": 5000.00 },
      
      { "nome": "Júlia Pereira", "email": "julia.pereira@empresa.com", "cargo": "Gerente de Recursos Humanos", "departamento": "RH", "salario": 6800.00 },
      { "nome": "Kauan Oliveira", "email": "kauan.oliveira@empresa.com", "cargo": "Especialista em Recrutamento", "departamento": "RH", "salario": 4000.00 },
      { "nome": "Larissa Rocha", "email": "larissa.rocha@empresa.com", "cargo": "Analista de Treinamento", "departamento": "RH", "salario": 3800.00 }
    ],
    
    "lojas": [
      { "cidade": "São Paulo", "endereco": "Rua das Flores, 123, Bairro Bela Vista" },
      { "cidade": "Rio de Janeiro", "endereco": "Avenida Atlântica, 456, Copacabana" },
      { "cidade": "Belo Horizonte", "endereco": "Praça Sete de Setembro, 789, Centro" },
      { "cidade": "Porto Alegre", "endereco": "Rua dos Andradas, 101, Moinhos de Vento" }
    ]
  }
}


module.exports = dadosEmpresa