const express = require('express');
const app = express();

const port = 8000;

animals = [
    {
        name: "dog",
        age: 12
    },

    {
        name: "cat",
        age : 15
    }
]

companies = [
    {
        name: "Nestle",
        size: 300
    },

    {
        name: "Nivea",
        size: 250
    }
]

foods = [
    {
        name: "Banku",
        price: 25
    },

    {
        name: "Fufu",
        price: 35
    }
]


app.get('/', (req, res) => {
    res.send('<h1> Welcome to the CLIENT SIDE!!</h1>');
});

app.get('/api', (req, res) => {
    res.send('<h1>Welcome to SERVER SIDE!!</h1>');
})

app.get('/animals', (req, res) => {
    res.json(animals);
})

app.get('/companies', (req, res) => {
    res.json(companies);
})

app.get('/foods', (req, res) => {
    res.json(foods);
})

app.listen(port, console.log('Server listening on ' + port));