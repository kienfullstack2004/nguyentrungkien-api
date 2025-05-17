const jwt = require("jsonwebtoken");
require("dotenv").config();

class VerifyToken{
    verify = (req,res,next) => {
        const authToken = req.headers.authorization.split(' ')[1]
        // console.log(authToken)
        if(!authToken){
            return res.status(401).json({
                code:-1,
                message:"Authorization Blank"
            })
        }

        jwt.verify(authToken,process.env.SECRET_JWT,(err,user)=>{
            if(!err){
                req.user = user;
                next();
            }
        })
    } 
}

module.exports = new VerifyToken();