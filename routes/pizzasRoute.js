const express = require('express');
const router = express.Router();
const PizzasController = require('../controllers/pizzasController');

router.get('/', PizzasController.listarCardapio);
router.get('/:nome', PizzasController.buscarPizza);

module.exports = router;