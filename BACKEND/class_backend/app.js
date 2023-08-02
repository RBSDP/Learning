require("dotenv").config()

const express = require('express')
const User = require('./model/user')
const app = express()



app.get('/', (req,res)=>{
    res.status(200).send("hellojs")
})

app.post("/signup",async (req,res)=>{


    // checking all the mandatory feilds
    const {firstname,lastname,email,password} = req.body
    if (!(email && password && firstname)){
        res.status(400).send("all the feilds are required")
    }




    // user mail
    const exuser = await User.findOne(email)
    if (exuser){
        res.status(400).send("user is present already")
    }

    //password
    


})

module.exports = app;