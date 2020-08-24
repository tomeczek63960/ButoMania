const mongoose = require('../index');
const { loginSchema, registerSchema, deliverySchema } = require('../schema/auth');

module.exports.registerModel = mongoose.model( 'register', registerSchema ); 
module.exports.loginModel = mongoose.model( 'auth', loginSchema );
module.exports.deliveryModel = mongoose.model( 'delivery', deliverySchema );
