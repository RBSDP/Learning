// this will hold the schema for the user

// it explains the different fields of use and how it will be stored in the mongodb 

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    userId:{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type :String , 
        required  :true
    },
    email  : {
        type : String,
        required : true,
        unique : true,
        lowercase  : true,
        minLength  : 10
    },
    userType  : {
        type : String,
        required : true,
        deafult : "CUSTOMER",
        enum : ["CUSTOMER", "ADMIN"] 
    }
},{timestamps : true});

// define the collection name where it will be stored

module.exports = mongoose.model("User",userSchema);