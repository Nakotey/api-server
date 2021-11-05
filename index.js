const express = require('express');
const app = express();

const port = 3000;

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


app.get('/', (req, res) => {
    res.send('Welcome to express');
});

app.get('/animals', (req, res) => {
    res.json(animals);
})

app.get('/companies', (req, res) => {
    res.json(companies);
})

app.listen(port, console.log('Server listening on ' + port));