const pizzas = [
    {
        sabor: "Marguerita",
        preco: 35
    },
    {
        sabor: "Calabresa",
        preco: 40
    },
    {
        sabor: "Bacon",
        preco: 37
    },
    {
        sabor: "Coração",
        preco: 29
    }
];

const listarCardapio = () => {
    return pizzas;
};

const buscarPizza = nome => {
    let resultadoBusca = pizzas.find( pizza => pizza.sabor == nome);
    return resultadoBusca;
};

module.exports = { listarCardapio, buscarPizza };