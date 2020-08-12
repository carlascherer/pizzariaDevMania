const cardapio = require('../models/cardapio');

const PizzasController = {
    listarCardapio: (req, res) => {
        let listaCardapio = cardapio.listarCardapio();
        res.send(listaCardapio);
    },
    buscarPizza: (req, res) => {
        let busca = req.params.nome;
        let resultadoBusca = cardapio.buscarPizza(busca);
        resultadoBusca ? res.send(cardapio.buscarPizza(busca)) : res.send('A busca não retornou nenhum resultado!');
    }
}

module.exports = PizzasController;