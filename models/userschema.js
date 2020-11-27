const mongoose = require("mongoose")
const userdetails = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

    
})
module.exports = mongoose.model("userdata",userdetails)