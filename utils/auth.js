const jwt = require('jsonwebtoken')

module.exports = (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token=authHeader.split('Bearer ')[1];
        if(token)
        {
            try{
                const info=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
                req.info = info;
                return next();
            }catch(e)
            {
                return res.status(401).send({message:"TokenExpired"})
            }    
        }
        return res.status(401).send({message:"authorization token must be Bearer [token]"})
    
    }
    else{
        return res.status(401).send({message:"authorization header must be provided"}); 
    }
    
}
