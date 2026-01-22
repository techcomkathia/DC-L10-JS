# Sistema de Gerenciamento de Estacionamento

## Descrição

Sistema de API desenvolvido em Node.js com Express para gerenciamento de estacionamento acadêmico. Controla usuários, veículos, entradas, saídas, calcula valores de estacionamento e gera relatórios. Projeto focado em aprendizado progressivo com boas práticas de arquitetura de software.

## Funcionalidades Principais

- **Autenticação de Usuários**: Login com JWT para Administradores e Funcionários.
- **Gerenciamento de Usuários**: Cadastro, edição, desativação e visualização (apenas para Administradores).
- **Configuração do Estacionamento**: Cadastro de nome, endereço e controle de vagas por tipo (carro/moto).
- **Cadastro de Veículos**: Registro de placa, modelo, cor e tipo, com validação de unicidade de placa.
- **Controle de Entradas e Saídas**: Registro automático de data/hora, verificação de vagas disponíveis e cálculo de valor na saída.
- **Relatórios**: Listagem de veículos estacionados, histórico de movimentações e faturamento por período.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para criação de APIs RESTful.
- **Sequelize**: ORM para interação com o banco de dados MySQL.
- **MySQL**: Banco de dados relacional.
- **JWT (JSON Web Tokens)**: Para autenticação segura.
- **Bcrypt**: Para criptografia de senhas.
- **Dotenv**: Para gerenciamento de variáveis de ambiente.
- **Nodemon**: Para reinicialização automática do servidor durante desenvolvimento.

## Instalação

### Pré-requisitos

- Node.js (v14+)
- MySQL (v8+)
- Editor de código

### Passos para Instalação

1. Clone ou baixe o projeto.
2. Execute: `npm install`
3. Crie banco de dados MySQL: `estacionamento`
4. Configure `.env` com variáveis (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET, PORT)
5. Execute: `npx sequelize-cli db:migrate`
6. Inicie com `npm run dev` (desenvolvimento) ou `npm start` (produção)

Servidor em `http://localhost:3000`.

## Uso

### Autenticação

- Faça login com um usuário existente para obter um token JWT.
- Use o token no header `Authorization: Bearer <token>` para acessar rotas protegidas.

### Endpoints Principais

#### Usuários
- `POST /api/usuarios/login` - Login de usuário
- `POST /api/usuarios` - Cadastrar usuário (Administrador)
- `GET /api/usuarios` - Listar usuários (Administrador)
- `PUT /api/usuarios/:id` - Editar usuário (Administrador)
- `DELETE /api/usuarios/:id` - Desativar usuário (Administrador)

#### Estacionamento
- `POST /api/estacionamentos` - Cadastrar estacionamento
- `GET /api/estacionamentos` - Listar estacionamentos

#### Veículos
- `POST /api/veiculos` - Cadastrar veículo
- `GET /api/veiculos` - Listar veículos

#### Movimentações
- `POST /api/movimentacoes/entrada` - Registrar entrada
- `POST /api/movimentacoes/saida` - Registrar saída
- `GET /api/movimentacoes` - Listar movimentações
- `GET /api/movimentacoes/estacionados` - Veículos estacionados
- `GET /api/movimentacoes/historico` - Histórico
- `GET /api/movimentacoes/faturamento` - Faturamento por período

#### Preços
- `POST /api/precos` - Definir preços por tipo de veículo
- `GET /api/precos` - Listar preços

Para testar os endpoints, use ferramentas como Postman ou Insomnia.

## Estrutura do Projeto

```
src/
├── app.js              # Configuração do Express
├── server.js           # Inicialização do servidor
├── config/             # Configurações (JWT, etc.)
├── database/           # Conexão com banco e Sequelize
├── models/             # Modelos do banco de dados
├── routes/             # Definição das rotas
├── controllers/        # Lógica de controle (req/res)
├── services/           # Regras de negócio
├── middlewares/        # Middlewares (autenticação, erros)
└── utils/              # Funções auxiliares
```

Esta estrutura segue uma arquitetura em camadas, facilitando a manutenção e extensão do código.

## Regras de Negócio

- Apenas Administradores podem gerenciar usuários.
- Placas de veículos devem ser únicas.
- Entradas só são permitidas se houver vagas disponíveis.
- Valores são calculados na saída com base no tempo e tipo de veículo.
- Todas as operações requerem autenticação.

## Contribuição

1. Faça fork do projeto.
2. Crie branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -am 'Adiciona funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra Pull Request.

## Licença

Este projeto é licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

---
