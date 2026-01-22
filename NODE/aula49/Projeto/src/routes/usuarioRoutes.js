const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.create);
router.get('/', usuarioController.findAll);
router.get('/:id', usuarioController.findById);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.deactivate);

module.exports = router;