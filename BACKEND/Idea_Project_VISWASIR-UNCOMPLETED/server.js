const express = require("express");
const serverConfig = require("./configs/server.config");
const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config');
const userModel = require("./models/user.model")
const bcrypt = require('bcrypt')


const app = express();


// Logic to connect to Mongodb and create an admin user
// need to have the mongodb should be up and running in the local machine

mongoose.connect(dbConfig.DB_URL)
const db =mongoose.connection;
db.on("error",()=>{
    console.log("error while connecting to db")
})
db.once("open",()=>{
    console.log("connected");
    init()
})


async function init(){

    // check if admin user is already present
    let admin = await userModel.findOne({
        userId : "admin"
    })

    if(admin){
        console.log("admin user already present")
    }

    // initilise the mongo db
    //Need to create the admin user

    admin = await userModel.create({
        name : "prasasd",
        userId: "prasd",
        email: "rbsda12345@gmail.com ",
        userType : "ADMIN",
        password : bcrypt.hashSync("welcome1",8)
    });
    console.log(admin);

}
app.listen(serverConfig.PORT, ()=>{
    console.log("server starting")
})