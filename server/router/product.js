const router = require('express').Router();
const productModel = require('../mongoose/model/product');
 
router.get('/product/:_id', async (req,res)=>{
    const _id = req.params._id;
 
    try{
        const product = await productModel.find({ _id });
        res.send(product);
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});
router.get('/popular-products', async ( req, res ) => {
    try{
        const products = await productModel.find({}).sort( { ratesAmount: -1 } ).limit(20);
        res.send(products);
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});
router.get('/filter', async (req,res) => {
    const body = JSON.parse(req.headers.body);

    try{
        const products = await productModel.find(body);
        res.send(products);
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});
router.get('/search', async (req,res) => {
    const body = JSON.parse(req.headers.body);

    try{
        const products = await productModel.find({
            $or: [
                { 'name': { $regex: body.filter, $options: 'i' }  },
                { 'brand': { $regex: body.filter, $options: 'i' }},
                { 'type': { $regex: body.filter, $options: 'i' }},
                { 'shoesType': { $regex: body.filter, $options: 'i' }},
            ]
        });
        res.send(products);
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});
router.get('/full-search',async(req,res)=>{
    const body = JSON.parse(req.headers.body);
    const query = { price: { $gte: body.price.min, $lte: body.price.max } };
    
    const sizeArr=[];
    body.size.forEach(sizeValue => {
        sizeArr.push( parseInt( sizeValue ) );
    });

    if(body.type !== 'wszystkie'){
        query.type = body.type;
    };
    if(body.shoesType !== 'wszystkie'){
        query.shoesType = body.shoesType;
    };
    if(body.brand !== 'wszystkie'){
        query.brand = body.brand;
    };
    if(body.color[0] !== 'wszystkie'){
        query.info = 
            { $elemMatch: {
                color:{ $in: body.color}
            }
        };
    };
    if(body.size[0] !== 'wszystkie'){
        query.size = { "$in": sizeArr }; 
    };

    try{
        const products = await productModel.find(query);
        res.send(products);
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});
  
module.exports = router;