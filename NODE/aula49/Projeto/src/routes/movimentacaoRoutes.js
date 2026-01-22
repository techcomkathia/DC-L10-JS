const express = require('express');
const router = express.Router();
const movimentacaoController = require('../controllers/movimentacaoController');

router.post('/entrada', movimentacaoController.registrarEntrada);
router.post('/saida', movimentacaoController.registrarSaida);
router.get('/estacionados', movimentacaoController.listarEstacionados);
router.get('/historico', movimentacaoController.listarHistorico);
router.get('/faturamento', movimentacaoController.calcularFaturamento);

module.exports = router;