const mongoose = require('../index');

module.exports.loginSchema = new mongoose.Schema({
    email:String,
    password:String,
},{ collection:'users' });

module.exports.registerSchema = new mongoose.Schema({
    email:String,
    password:String,
    name:String,
    surname:String
},{ collection: 'users' });


module.exports.deliverySchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    deliveryAdress: {
        street:String,
        number:Number,
        city:String,
        postalCode:String,
        country:String,
        contactNumber:Number,
    }
},{collection:'users'});