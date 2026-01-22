const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errorMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
const adminMiddleware = require('./middlewares/adminMiddleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

// Middlewares globais
app.use(express.json());

// Rotas públicas
app.use('/api/auth', require('./routes/authRoutes'));

// Rotas protegidas
app.use('/api/usuarios', authMiddleware, adminMiddleware, require('./routes/usuarioRoutes'));
app.use('/api/estacionamentos', authMiddleware, require('./routes/estacionamentoRoutes'));
app.use('/api/veiculos', authMiddleware, require('./routes/veiculoRoutes'));
app.use('/api/movimentacoes', authMiddleware, require('./routes/movimentacaoRoutes'));
app.use('/api/precos', authMiddleware, require('./routes/tabelaPrecosRoutes'));

// Documentação da API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware de erro (sempre por último)
app.use(errorMiddleware);

module.exports = app;
