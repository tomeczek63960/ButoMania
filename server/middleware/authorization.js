const jwt = require("jsonwebtoken");

const authorization = (req,res,next) =>{
    const token = req.headers.token;
    
    try{
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next();
    }catch(err){
        return res.status(401).send('Użytkownik niepotwierdzony');
    }
}

module.exports = authorization;