const exprerss = require("express")
const router = exprerss.Router()
const userdata = require("../models/userschema")
router.post("/signup", async(req,res)=>{
    
    console.log(req.body)
    const user3 = new userdata({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city
    })
    console.log(user3,"user333")
    const newuser = await userdata.find({name: user3.name},{email:user3.email},{password:user3.password})
    if(newuser[0]){
        res.json("this user details already exists...")
        return false
    }
    try{
        const viewdata = await user3.save()

        res.json(viewdata)
    }catch(err){
        console.log(err)
        res.send(err)
    }
})
module.exports = router