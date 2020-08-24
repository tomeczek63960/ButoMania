const mongoose = require('mongoose');
mongoose.connect(process.env.DB_KEY ,{ useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false } );

module.exports = mongoose;