const mongoose = require('../index');

const basketSchema = new mongoose.Schema({
    email:String,
    name:String,
    shoesType:String,
    model:String,
    type:String,
    brand:String,
    price:Number,
    discount:Number,
    color:String,
    size:Number,
    amountInBasket:Number,
    img:String,
    height:Number,
    weight:Number,
    rates:Number,
    ratesAmount:Number,
}, { collection: 'basket' });

module.exports = basketSchema;