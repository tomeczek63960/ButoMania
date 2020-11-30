const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const compression = require('compression');

const productRouter = require('./server/router/product');
const authRouter = require('./server/router/auth');
const basketRouter = require('./server/router/basket');

// variables
    const PORT = process.env.PORT || 5010;

// middleware
    app.use(express.json());
    app.use(cors());
    app.use(compression());
    app.use('/products/', productRouter);
    app.use('/auth/', authRouter);
    app.use("/basket", basketRouter);

// production
    if(process.env.NODE_ENV === 'production'){
        app.use(express.static('client/build'));

        app.get('*', (req,res)=>{
            res.sendFile(path.resolve(__dirname,'client','build','index.html'));
        });
    }

app.listen(PORT);