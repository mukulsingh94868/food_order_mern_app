const mongoose = require("mongoose");

var mongodb_URL = 'mongodb+srv://food_order:food_order_123@cluster0.t5q7pda.mongodb.net/food_orders_app';

mongoose.connect(mongodb_URL);

var db = mongoose.connection;

db.on('connected', () => {
    console.log('mongodb connection successfull!')
});

db.on('error', () => {
    console.log('mongodb connection error');
});

module.exports = mongoose;