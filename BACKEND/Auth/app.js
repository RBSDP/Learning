require('dotenv').config()
//keep .env file in the root foldet
require("./config/database").connect()

// custom middleware
const auth=require('./middleware/auth')

const express = require('express')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const User = require('./model/user')

const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json()) 
app.use(cookieParser())
// once we import this cookie parser then it injects .cookies to all the requests (req)
//we do not need to import this coookie parsar everytime

app.use(express.urlencoded({extended:true}))

app.get('/',(req, res)=> {
    res.send("hello auth syatem")
})


app.post('/register', async (req,res)=>{
   try{
        //collect all informantion
        const {firstname,lastname,email,password} = req.body
        //validate the data if exists
        if(!(email && password && lastname && firstname)){
            res.status(401).send("all feilds are required")
        }

        //check if user exists or not
        const existinguser = await User.findOne({email:email})
        if(existinguser){
            res.status(401).send("user already found in database")
        }

        // encrypt the passsword 
        const myEncryptedPassword = await bcrypt.hash(password,10)


        // create a new entry in database
        const user = await User.create({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:myEncryptedPassword 
        })
        

        //create a tocken and send it to user
        const token = jwt.sign({
            id : user_id ,email:email
        },'sshhhh',{expiresIn : '2h'})


        user.token = token
        //donot want to send the password
        user.password = undefined

        res.status(201).json(user)
        
   }catch (error){
    console.log(error)

   }
})


app.post('/login',async(req,res)=>{
    try{
        //collect infromation from the front end
        const {email,password} = req.body
        //validate
        if(!(email && password)){
            res.status(401).send("email and password are required")
        }
        //checkuser in database
        const user = await User.findOne({email:email})

        //match the password
        if(user && (await bcrypt.compare(password, user.password))){
            const token =jwt.sign({id:user._id ,email :email },'sshhhh',{expiresIn:'2h'})

            user.password = undefined
            user.token = token

            //cookies
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }
            //create token and send
            res.status(200).cookie("token",token,options).json({
                success : true,
                token,
                user

            })

        }
        
        
    }catch(error){
        console.log(error)

    }
})

app.get('/dashboard',auth,(req,res)=>{
   
    res.send("welcome to dash board")
})


app.get('/profile',(req,auth,res)=>{
    //access to req.user = id,email

    //based on id, query to DB and get all infromation of user - findOne({id})

    //send a json responce with all data
})


module.exports = app



