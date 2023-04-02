const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
let ShoppingList = require('./model/ShoppingList.js');


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect("mongodb+srv://lupsasilvia:W6ko7AW0cXonTuwz@cluster0.iqpguv4.mongodb.net/ShoppingListApp");


app.listen(3000, () => console.log('Server started on port 3000'));
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB!");
})