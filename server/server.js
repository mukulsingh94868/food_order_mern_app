const express = require('express');
const mongoose = require("mongoose");
const app = express();

const Pizza = require('./models/pizzaModel');
const pizzaRoute = require('./routes/pizzaRoutes');

// const db = require('./db.js');

app.use(express.json());

app.use('/api/pizzas', pizzaRoute);

app.get('/', (req, res) => {
    res.send('hello world !');
});

app.get('/getpizzas', async (req, res) => {
    const size = await Pizza.find();
    res.send(size);
})

var CONNECTION_URL = 'mongodb+srv://food_order:food_order_123@cluster0.t5q7pda.mongodb.net/food_orders_app';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
            console.log('Database connection established!');
        })
        
    }).catch((error) => {
        console.log(`error: ${error}`);
    })