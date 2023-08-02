
const jwt = require('jsonwebtoken')


const auth = (req,res,next)=>{
    console.log(req.cookies);
    const {token} = req.cookies

    if (!token){
        return res.status(403).send('acess denied')
    }
    try{
        const decode = jwt.verify(token,'sshhhh')
        console.log(decode)
        req.user = decode

        //extract id from token and query to db (need to be done)

    }catch(error){
         res.status(403).send('token is invalid')
    }
    next();
    }



module.exports = auth