const mongoose = require('../index');
const shoesSchema = require('../schema/product');

const productModel = mongoose.model( 'Shoes', shoesSchema )
module.exports = productModel;