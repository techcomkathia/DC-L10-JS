const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.post('/', veiculoController.create);
router.get('/', veiculoController.findAll);
router.get('/:id', veiculoController.findById);
router.get('/placa/:placa', veiculoController.findByPlaca);
router.put('/:id', veiculoController.update);
router.delete('/:id', veiculoController.delete);

module.exports = router;