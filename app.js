// Definição das variáveis do sistema
const express = require('express');
const app = express();

// Definição das rotas do sistema
const pizzasRoute = require('./routes/pizzasRoute');
const clientesRoute = require('./routes/clientesRoute');

// Rotas da aplicação
app.get('/', (req, res) => {
    let saudacao = 'Bem vindo(a) à Pizzaria DevMania!';
    res.send(saudacao);
});
app.use('/pizzas', pizzasRoute);
app.use('/clientes', clientesRoute);

// Definição da porta do servidor
app.listen(2000, 'localhost', () => console.log('Servidor rodando'));