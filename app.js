const express = require('express');
const mongoose = require('mongoose');
const router = require("./controllers/userLogin");

const app = express()
app.use(express.json())

app.get('/hi',(req,res) => {
    res.send('hello world.........')
})
app.use("/route",router)

mongoose.connect('mongodb://localhost/students',{useNewUrlParser:true})
    .then(() => {
        console.log('mongodb is connected.......')
        app.listen(4000,() => {
            console.log(`server is running on port ${4000}`)
        })
    })
    .catch(err => {
        console.log(err)
    })


