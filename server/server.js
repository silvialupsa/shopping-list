const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let Element = require('./model/Shopping.js');

mongoose.connect("mongodb+srv://lupsasilvia:W6ko7AW0cXonTuwz@cluster0.iqpguv4.mongodb.net/ShoppingListApp");

export class Shopping {
    ShoppingListPost = (title, comment, status, quantity, unit) => {
        const createdAt = Date.now();
        const shoppingElementObject = new Element({ title, comment, createdAt, status, quantity, unit });
        shoppingElementObject.save()
            .then(shoppingElementObject => { return shoppingElementObject })
            .catch(err => { return ({ success: false }) });
    }

    ShoppingListGet = () => {
        Element.find()
            .then((shopping) => { return shopping })
            .catch((err) => { return ({ success: false }) });
    } 

    ShoppingListDelete = (id) => { 
        Element.findByIdAndDelete(id)
            .then((shopping) => { return shopping })
            .catch((err) => { return ({ success: false }) });
    }

    ShoppingListPatch = (id) => {
        Element.findOneAndUpdate({ _id: req.params.id }, { status: req.body.status }, { new: true })
            .then((shopping) => { return shopping })
            .catch((err) => { return ({ success: false }) });
    }
}

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB!");
})