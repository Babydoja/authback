const express =require("express")
const app = express()
const cors=require('cors')
const userRouter=require('../Routes/Routes')
const dotenv =require("dotenv").config()
const mongoose = require("mongoose")
const PORT=7000

//server route
app.use(cors(
    {origin:['http://localhost:3000','https://authfrontend-two.vercel.app/']}
))
app.get('/',(req,res)=>{
    res.send('server home page')
})
app.use(express.json())
//midleware
app.use('/api/user',userRouter)
mongoose
.connect(process.env.AUTH_URL)
.then ((req,res)=>{  
    app.listen (PORT,()=>{
        console.log(`server is now running ${PORT}` );
    })
    console.log('db connected');   
})
    .catch((err)=>{
    console.log(err);
})