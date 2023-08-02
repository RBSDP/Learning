const mongoose = require("mongoose")
const {MONGO_URL}  = process.env

exports.connect = () =>{
    mongoose.connect(MONGO_URL,{
        useNewUrlPraser :true,
        useUnifiedTopology:true
    }).then(console.log(`db is connected`))
    .catch(
        error => {
            console.log(`db connection failed`)
            console.log(error)
            process.exit(1)
    
        }
    
        )
}