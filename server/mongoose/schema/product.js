const mongoose = require('../index');

const shoesSchema = new mongoose.Schema({
    name:String,
    shoesType:String,
    model:String,
    type:String,
    brand:String,
    price:Number,
    discount:Number,
    size:Array,
    info:Array,
    height:Number,
    weight:Number,
    rates:Number,
    ratesAmount:Number,
    purpose:String,
    interior:String,
    insert:String,
    season:String
}, { collection: 'shoes' });

module.exports = shoesSchema;