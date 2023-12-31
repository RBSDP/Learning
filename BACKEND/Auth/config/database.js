const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL

exports.connect = () =>{
    mongoose.connect(MONGODB_URL,{
        useNewUrlParser : true,
        useUnifiedTopology :true
    })
    .then(console.log("db connected with sucess"))
    .catch((error)=>{
        console.log("db connection failed")
        console.log(error)
        process.exit(1)
    })
}
