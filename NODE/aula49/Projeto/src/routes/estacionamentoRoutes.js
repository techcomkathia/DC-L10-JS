const express = require('express');
const router = express.Router();
const estacionamentoController = require('../controllers/estacionamentoController');

router.post('/', estacionamentoController.create);
router.get('/', estacionamentoController.findAll);
router.get('/:id', estacionamentoController.findById);
router.put('/:id', estacionamentoController.update);
router.delete('/:id', estacionamentoController.delete);

module.exports = router;