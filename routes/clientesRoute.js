const express = require('express');
const router = express.Router();
const ClientesController = require('../controllers/clientesController');

router.get('/', ClientesController.listarClientes);

module.exports = router;