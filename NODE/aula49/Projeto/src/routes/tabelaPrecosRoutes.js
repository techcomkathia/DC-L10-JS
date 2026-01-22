const express = require('express');
const router = express.Router();
const tabelaPrecosController = require('../controllers/tabelaPrecosController');

router.post('/', tabelaPrecosController.create);
router.get('/', tabelaPrecosController.findAll);
router.get('/:id', tabelaPrecosController.findById);
router.put('/:id', tabelaPrecosController.update);
router.delete('/:id', tabelaPrecosController.delete);

module.exports = router;