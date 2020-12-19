const router = require("./userSignup")
const userdata = require('../models/userschema')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


router.post("/login", async(req,res)=>{
    const email = req.body.email
    const password = req.body.password

    // nasty token mean token is not token is wrapped by content
    const nastyToken = req.headers['authorization'] 
    console.log(nastyToken)
    if (nastyToken) {
        const token = nastyToken.split(' ')[1] // take out only token from nasty token
        // checking user is exit or not
        userdata.findOne({email: email}) 
            .then(user => {
                console.log(user)
                if (user) {
                    return bcrypt.compare(password,user.password)
                        .then(isPasswordMatch => {
                            if (isPasswordMatch) {
                                jwt.verify(token,"navgurukul",(err,user) => {
                                    if (user) {
                                        return res.json({
                                            user,
                                            message: 'user successfully logged in..........'
                                        })
                                    } else {
                                        console.log(err)
                                    }                                   
                                })
                            } else {
                                res.send('message:Incorrect password.......')
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
                res.send('message:Incorrect Email.....')
            }) 
            .catch(err => {
                res.status(500).send('server err')
            })                 
    } else {
        res.send('Unauthorization..')
    }
})

module.exports = router

