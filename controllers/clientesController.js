const clientes = require('../models/clientes');

const ClientesController = {
    listarClientes: (req, res) => {
        let listaClientes = clientes();
        res.send(listaClientes);
    }
}

module.exports = ClientesController;