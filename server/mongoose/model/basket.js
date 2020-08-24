const mongoose = require('../index');
const basketSchema = require('../schema/basket');
module.exports = basketModel = mongoose.model( 'basket', basketSchema );