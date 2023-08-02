const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstname : {
        type :String,
        defailt : null,
        required : true
    },
    lastname : {
        type :String,
        defailt : null,
        required : true
    },
    email : {
        type:String,
        required : [true,'email is complusort'],
        unique:true
    },
    password :{
        type:String
    },
    token:{
        type:String
    }
   

}) 


module.exports  = mongoose.model("user",userSchema);
