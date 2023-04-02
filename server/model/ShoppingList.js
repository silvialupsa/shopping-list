const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const shoppingSchema = new Schema({
    title: String,
    quantity: Number,
    status: Boolean,
    createdAt: Date
});

const ShoppingSchema = model('ShoppingSchema', shoppingSchema);


module.exports = ShoppingSchema;