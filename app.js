const express = require("express")
const  mongoose = require('mongoose')
const mongoconnection = ("mongodb://localhost:/students")
const app = express()
mongoose.connect(mongoconnection, {useNewUrlParser:true, useUnifiedTopology: true })
const conn = mongoose.connection;


const router = require("./controllers/userLogin")
app.use(express.json())

conn.on("open",()=>{
    console.log("connection is sucessfull..")
})


app.use("/",router)


require('./controllers/userLogin')

app.use(express.json())


app.listen(4000,()=>console.log(`server is running on port ${4000}`))