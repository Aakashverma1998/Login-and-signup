const express = require('express');
const mongoose = require('mongoose');
const router = require("./controllers/userLogin");

const app = express()
app.use(express.json())

app.use("/route",router)
app.get("/hi", (req,res)=>{
    res.send("hello world...")
})

// conencting to mongodb and listning to port
mongoose.connect('mongodb://localhost/students', {useNewUrlParser: true},{useUnifiedTopology: true })
    .then(() => {
        console.log('mongo db connected...')
        app.listen(3000, ()=>{
            console.log('listing through port 3000...')
        });
    })
    .catch(err => {
        console.log(err)
    })


