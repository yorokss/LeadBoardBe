
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const fetchUser = (req,res,next)=>{
      try {
            const token = req.header("auth-token");
            if(!token){
                  res.status(401).send({error:"Please authenticate using a valid token"});
            } 
            const user = jwt.verify(token,process.env.JWTSECRET);
           
            req.user = user;
            next();
      } catch (error) {
            console.log(error.message);
            res.status(401).send({error:"Please authenticate using a valid token"});
      }
}
module.exports = fetchUser;