const router = require("./userSignup")
// const exprerss = require("express")
const userdata = require('../models/userschema')
router.post("/login", async(req,res)=>{
    const userLogin = await userdata({
        email:req.body.email,
        password: req.body.password
    })
    const checkLogin = await userdata.find({email:userLogin.email})
    const checkPassword = await userdata.find({password:userLogin.password})
    if(checkLogin[0]){
        if(checkPassword[0]){
            res.json({msg:"login sucessfull...."})
        }else{
            res.json({msg:"your password is incorrect.."})
        }
    }else{
        res.json({mas:"your email id is incorrect...."})
    }
})
module.exports = router

