let dadosEmpresa = {
  "empresa_dados": {
    "produtos": [
      { "nome": "Smart TV 55'' 4K", "preco": 2500.00, "departamento": "Eletrônicos", "quantidade": 50, "estoque": true },
      { "nome": "Notebook Gamer Core i7", "preco": 4800.00, "departamento": "Eletrônicos", "quantidade": 25, "estoque": true },
      { "nome": "Fones de Ouvido Bluetooth", "preco": 150.00, "departamento": "Eletrônicos", "quantidade": 150, "estoque": true },
      { "nome": "Console de Última Geração", "preco": 3200.00, "departamento": "Eletrônicos", "quantidade": 10, "estoque": true },
      { "nome": "Câmera DSLR Profissional", "preco": 6500.00, "departamento": "Eletrônicos", "quantidade": 5, "estoque": true },
      
      { "nome": "Calça Jeans Slim Fit", "preco": 120.00, "departamento": "Vestuário", "quantidade": 200, "estoque": true },
      { "nome": "Camiseta Básica Algodão", "preco": 45.00, "departamento": "Vestuário", "quantidade": 500, "estoque": true },
      { "nome": "Tênis Esportivo Corrida", "preco": 280.00, "departamento": "Vestuário", "quantidade": 80, "estoque": true },
      { "nome": "Jaqueta de Couro Sintético", "preco": 350.00, "departamento": "Vestuário", "quantidade": 30, "estoque": true },
      { "nome": "Meias Cano Curto (3 Pares)", "preco": 25.00, "departamento": "Vestuário", "quantidade": 300, "estoque": true },
      
      { "nome": "Liquidificador Potente", "preco": 180.00, "departamento": "Eletrodomésticos", "quantidade": 75, "estoque": true },
      { "nome": "Máquina de Café Espresso", "preco": 450.00, "departamento": "Eletrodomésticos", "quantidade": 40, "estoque": true },
      { "nome": "Micro-ondas Digital", "preco": 300.00, "departamento": "Eletrodomésticos", "quantidade": 60, "estoque": true },
      { "nome": "Aspirador de Pó Vertical", "preco": 220.00, "departamento": "Eletrodomésticos", "quantidade": 55, "estoque": true },
      { "nome": "Geladeira Frost Free Inox", "preco": 3500.00, "departamento": "Eletrodomésticos", "quantidade": 15, "estoque": true },
      
      { "nome": "Shampoo Hidratante", "preco": 35.00, "departamento": "Beleza e Cuidados", "quantidade": 400, "estoque": true },
      { "nome": "Perfume Floral Feminino", "preco": 220.00, "departamento": "Beleza e Cuidados", "quantidade": 90, "estoque": true },
      { "nome": "Creme Facial Anti-Idade", "preco": 110.00, "departamento": "Beleza e Cuidados", "quantidade": 70, "estoque": true },
      { "nome": "Kit Maquiagem Completo", "preco": 180.00, "departamento": "Beleza e Cuidados", "quantidade": 50, "estoque": true },
      { "nome": "Sabonete Líquido Ervas", "preco": 15.00, "departamento": "Beleza e Cuidados", "quantidade": 600, "estoque": true },
      
      { "nome": "Livro de Ficção Científica", "preco": 50.00, "departamento": "Livros e Mídia", "quantidade": 300, "estoque": true },
      { "nome": "Box Coleção de Filmes Clássicos", "preco": 150.00, "departamento": "Livros e Mídia", "quantidade": 60, "estoque": true },
      { "nome": "Revista Especializada em Games", "preco": 20.00, "departamento": "Livros e Mídia", "quantidade": 100, "estoque": true },
      { "nome": "E-book de Marketing Digital", "preco": 35.00, "departamento": "Livros e Mídia", "quantidade": 0, "estoque": false },
      { "nome": "Disco de Vinil Rock Clássico", "preco": 90.00, "departamento": "Livros e Mídia", "quantidade": 40, "estoque": true },
      
      { "nome": "Cadeira de Escritório Ergonômica", "preco": 550.00, "departamento": "Móveis e Decoração", "quantidade": 35, "estoque": true },
      { "nome": "Mesa de Jantar 6 Lugares", "preco": 1200.00, "departamento": "Móveis e Decoração", "quantidade": 20, "estoque": true },
      { "nome": "Luminária de Chão Moderna", "preco": 190.00, "departamento": "Móveis e Decoração", "quantidade": 50, "estoque": true },
      { "nome": "Tapete de Sala Grande", "preco": 320.00, "departamento": "Móveis e Decoração", "quantidade": 25, "estoque": true },
      { "nome": "Prateleira Modular", "preco": 95.00, "departamento": "Móveis e Decoração", "quantidade": 100, "estoque": true }
    ],
    
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

/* Crio uma API com os seguintes endpoints :
/produtos
    GET /produtos : retorna todos os produtos
    GET /produtos/beleza : retorna todos os produtos da categoria beleza
    GET /produtos/eletronicos : retorna todos os produtos da categoria eletrônico
    GET /produtos/vestuario : retorna todos os produtos da categoria vestuário

    POST /produtos : cria um novo produto
    Deverá receber um objeto com as seguintes propriedades: nome, descricao, preco e categoria
    Retornar uma resposta com uma mensagem indicando que o produto foi criado com sucesso e mostrar o produto criado


/funcionarios
    GET /funcionarios : retorna todos os funcionários
    POST /funcionarios : cria um novo funcionário
    Deverá receber um objeto com as seguintes propriedades: nome, email, cargo, departamento e salario
    Retornar uma resposta com uma mensagem indicando que o funcionário foi criado com sucesso e mostrar o funcionário criado

/lojas
    GET /lojas : retorna todas as lojas
*/