const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authorization = require('../middleware/authorization');
const { registerModel, loginModel, deliveryModel } = require('../mongoose/model/auth');

router.post('/login', async (req,res) =>{
    const {email, password} = req.body;
    
    try{
        const user = await loginModel.find({ email });
        if(!user[0]) return res.status(404).send({ msg: 'Niepoprawne dane logowania' });
        
        const passwordValid = await bcrypt.compare( password, user[0].password );
        if(!passwordValid) return res.status(400).send({ msg: "Niepoprawne dane logowania" });
        const token = await jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
        
        user[0].password = password;
        res.status(200).send({ user: user[0], token });
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});

router.post('/register', async (req,res) => { 
    const { email, password, name, surname } = req.body;

    try{
        const isUserEgsist = await registerModel.find( { email } );
        if( isUserEgsist[0] ) return res.status(400).send("Podany login jest już zajęty");
        
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync( password, salt );

        const newUser = new registerModel({ email, password: hashedPassword, name, surname });
        const saveUserRequest = await newUser.save();
        
        res.send({ msg: "Konto utworzono pomyślnie" });
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});

router.put('/change', authorization ,async (req,res) => {
    const { email, password, name, surname, prevEmail } = req.body;

    try{
        const isExistUser = await registerModel.find({ email: prevEmail });
        if(!isExistUser[0]) return res.status(404).send("Nie znaleziono takiego użytkownika");
        
        if(email !== prevEmail){
            const isNewEmailExist = await registerModel.find({ email });
            if( isNewEmailExist[0] ) return res.status(400).send({ msg: "Podany Email jest zajęty" });
        }
        
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync( password, salt );
        
        const changedData = await registerModel.findOneAndUpdate({ email: prevEmail }, { email, password:hashedPassword, name, surname });
        changedData.email = email;
        changedData.password = password;
        changedData.name = name;
        changedData.surname = surname;
        
        res.send( changedData );
    }catch(err){
        res.send({ msg: "Problemy z serweram" });
    }
});

router.put('/change-delivery',authorization ,async (req,res) => {
    const {email, data} = req.body;

    try{
        const updated = await deliveryModel.findOneAndUpdate( { email }, { deliveryAdress: data } );
        updated.deliveryAdress = data;
        res.send( updated );
    }catch(err){
        res.send({ msg: "Problemy z serwerem" });
    }
});

module.exports = router;