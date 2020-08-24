const router = require('express').Router();
const authorization = require('../middleware/authorization');
const basketModel = require('../mongoose/model/basket');

router.get('/products', authorization ,async (req,res) =>{
    const email = req.headers.body;
    
    try{
        const fetchReq = await basketModel.find({ email });
        res.send(fetchReq);
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});

router.post('/add',authorization,async (req,res) =>{
    const { name,shoesType,model,type,brand,price,discount,height,weight,rates,ratesAmount,  color,size,amountInBasket,img, email } = req.body;
    
    try{
        const fetchReq = await basketModel.find({ model, size, color, email });
      
        if(!fetchReq[0]){

            const newBasketProduct = new basketModel({ 
                email, name, model, shoesType, type, brand, price, discount, height,
                weight, rates, ratesAmount, color, size, amountInBasket, img
            });

            const addedProduct = await newBasketProduct.save();
            return res.send(addedProduct);

        }else{
            const changedAmountInBasket = fetchReq[0].amountInBasket + amountInBasket;
            const changedProduct = await basketModel.findOneAndUpdate({ model, color, size, email },{ amountInBasket: changedAmountInBasket });

            return res.send(changedProduct);
        };

    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});

router.delete("/remove", authorization, async (req,res)=>{
    const { model, color, size, email } = JSON.parse(req.headers.body)

    try{
        const fetchReq = await basketModel.findOneAndDelete({ model, color, size, email });
        res.send(fetchReq);
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});

router.delete("/remove-all", authorization, async (req,res) => {
    const email = req.headers.email;

    try{
        const removed = await basketModel.deleteMany({ email });
        res.send( { success: true } );
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});

router.put("/change-amount", async (req,res)=>{
    const { color, size, model, amountInBasket, email } = req.body;

    try{
        if(amountInBasket < 1) return res.status(400).send("Ilość musi być większa niż 0");
        const changedProduct = await basketModel.findOneAndUpdate({ model, size, color, email }, { amountInBasket });
        res.send(changedProduct);
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});

module.exports = router;