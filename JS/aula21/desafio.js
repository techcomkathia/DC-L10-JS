// O Magazine Cleitinho deseja fazer algumas verificações no seu estoque. Para isso, ele precisa fazer saber os produtos separados por departamento, saber os produtos que (idependentemente do departamento) tenham uma quantidade igual ou inferior a 10 unidades. Deseja também ter um array com todos os produtos com 10% de desconto para a blackfraude e por fim precisa saber o total de valor do estoque ( sem descontos).

//gabarito com divulgação na sexta 26/09

const produtos = [
  // Eletrônicos
  { nome: "Smartphone Galaxy", qtd: 10, preco: 2500, cor: "preto", marca: "Samsung", departamento: "Eletrônicos" },
  { nome: "Notebook Dell", qtd: 5, preco: 4500, cor: "cinza", marca: "Dell", departamento: "Eletrônicos" },
  { nome: "Fone Bluetooth", qtd: 15, preco: 300, cor: "branco", marca: "JBL", departamento: "Eletrônicos" },
  { nome: "TV LED 50''", qtd: 8, preco: 3200, cor: "preto", marca: "LG", departamento: "Eletrônicos" },
  { nome: "Carregador Portátil", qtd: 20, preco: 150, cor: "azul", marca: "Xiaomi", departamento: "Eletrônicos" },
  { nome: "Câmera Fotográfica", qtd: 7, preco: 1800, cor: "prata", marca: "Canon", departamento: "Eletrônicos" },
  { nome: "Console de Video Game", qtd: 4, preco: 3500, cor: "branco", marca: "Sony", departamento: "Eletrônicos" },
  { nome: "Smartwatch", qtd: 12, preco: 900, cor: "preto", marca: "Apple", departamento: "Eletrônicos" },
  { nome: "Headset Gamer", qtd: 10, preco: 400, cor: "vermelho", marca: "HyperX", departamento: "Eletrônicos" },
  { nome: "Monitor 24''", qtd: 6, preco: 1100, cor: "preto", marca: "Acer", departamento: "Eletrônicos" },

  // Vestuário
  { nome: "Camisa Social", qtd: 20, preco: 120, cor: "branca", marca: "Zara", departamento: "Vestuário" },
  { nome: "Calça Jeans", qtd: 15, preco: 200, cor: "azul", marca: "Levi's", departamento: "Vestuário" },
  { nome: "Jaqueta de Couro", qtd: 5, preco: 350, cor: "preto", marca: "Colcci", departamento: "Vestuário" },
  { nome: "Tênis Esportivo", qtd: 18, preco: 300, cor: "cinza", marca: "Nike", departamento: "Vestuário" },
  { nome: "Blusa de Moletom", qtd: 12, preco: 150, cor: "vermelha", marca: "Adidas", departamento: "Vestuário" },
  { nome: "Vestido Longo", qtd: 7, preco: 280, cor: "verde", marca: "Farm", departamento: "Vestuário" },
  { nome: "Shorts de Tecido", qtd: 10, preco: 90, cor: "amarelo", marca: "Hering", departamento: "Vestuário" },
  { nome: "Casaco de Lã", qtd: 8, preco: 400, cor: "bege", marca: "Riachuelo", departamento: "Vestuário" },
  { nome: "Chapéu Panamá", qtd: 5, preco: 100, cor: "marrom", marca: "Renner", departamento: "Vestuário" },
  { nome: "Cinto de Couro", qtd: 20, preco: 70, cor: "preto", marca: "Calvin Klein", departamento: "Vestuário" },

  // Beleza
  { nome: "Perfume Importado", qtd: 15, preco: 450, cor: "transparente", marca: "Chanel", departamento: "Beleza" },
  { nome: "Batom Vermelho", qtd: 30, preco: 50, cor: "vermelho", marca: "MAC", departamento: "Beleza" },
  { nome: "Creme Hidratante", qtd: 25, preco: 80, cor: "branco", marca: "Nivea", departamento: "Beleza" },
  { nome: "Shampoo Anticaspa", qtd: 40, preco: 30, cor: "azul", marca: "Head & Shoulders", departamento: "Beleza" },
  { nome: "Protetor Solar", qtd: 35, preco: 70, cor: "branco", marca: "La Roche-Posay", departamento: "Beleza" },
  { nome: "Base Facial", qtd: 20, preco: 90, cor: "bege", marca: "Maybelline", departamento: "Beleza" },
  { nome: "Esmalte", qtd: 50, preco: 10, cor: "rosa", marca: "Risqué", departamento: "Beleza" },
  { nome: "Kit de Maquiagem", qtd: 10, preco: 250, cor: "diversas", marca: "Sephora", departamento: "Beleza" },
  { nome: "Máscara de Cílios", qtd: 30, preco: 60, cor: "preto", marca: "L'Oreal", departamento: "Beleza" },
  { nome: "Água Micelar", qtd: 25, preco: 50, cor: "transparente", marca: "Bioderma", departamento: "Beleza" },

  // Móveis
  { nome: "Sofá 3 Lugares", qtd: 5, preco: 1500, cor: "cinza", marca: "Tok&Stok", departamento: "Móveis" },
  { nome: "Mesa de Jantar", qtd: 8, preco: 1200, cor: "marrom", marca: "Etna", departamento: "Móveis" },
  { nome: "Cadeira de Escritório", qtd: 10, preco: 500, cor: "preto", marca: "Flexform", departamento: "Móveis" },
  { nome: "Cama Box Queen", qtd: 3, preco: 2500, cor: "branco", marca: "Ortobom", departamento: "Móveis" },
  { nome: "Estante de Livros", qtd: 7, preco: 800, cor: "carvalho", marca: "Mobly", departamento: "Móveis" },
  { nome: "Guarda-Roupa", qtd: 5, preco: 1800, cor: "branco", marca: "Casah", departamento: "Móveis" },
  { nome: "Rack para TV", qtd: 6, preco: 700, cor: "preto", marca: "Politorno", departamento: "Móveis" },
  { nome: "Cômoda", qtd: 4, preco: 900, cor: "bege", marca: "MadeiraMadeira", departamento: "Móveis" },
  { nome: "Poltrona de Descanso", qtd: 5, preco: 1300, cor: "vermelha", marca: "Tok&Stok", departamento: "Móveis" },
  { nome: "Mesa de Centro", qtd: 10, preco: 400, cor: "branco", marca: "Móveis Simonetti", departamento: "Móveis" }
];

//Produtos separados por departamento
//Produtos que (idependentemente do departamento) tenham uma quantidade igual ou inferior a 10 unidades 
//Um array com todos os produtos com 10% de desconto para a blackfraude 
//O total de valor do estoque ( sem descontos).
