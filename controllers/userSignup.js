const exprerss = require("express")
const router = exprerss.Router()
const userdata = require("../models/userschema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

router.post("/signup",(req,res)=>{
    
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const address = req.body.address
    const city = req.body.city

    if (email.length > 8 ) {
        
    }
    
    userdata.findOne({email: email}) 
        .then(user => {
            if (user) {
               return res.send('user already exit.....')
            }
            bcrypt.hash(password,10)
                .then(hashedPassword => {
                    jwt.sign({email: email,password: hashedPassword},"navgurukul",async (err,token) => {
                        const user =  new userdata({
                            name: name,
                            email: email,
                            password: hashedPassword,
                            address: address,
                            city: city
                        })
                        await user.save()
                        return res.json({
                            token: token,
                            message: 'user updated successfully.......'
                        })
                    })
                }) 
                .catch(err => {
                    res.status(500).send('bcryt error')
                })         
        })    
})

module.exports = router