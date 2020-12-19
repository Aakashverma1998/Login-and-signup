const mongoose = require("mongoose")
const validator = require("validator")
const userdetails = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        max:3
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
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email....")
            }
        }
        
    },
    password:{
        type:String,
        required:true,
        unique:true

    },
    token:{
        type:String,
    }

    
})

module.exports = mongoose.model("userdata",userdetails)