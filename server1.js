const express =require("express")
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express()

const userRouter=require('./Routes1/Routes1')
const dotenv =require("dotenv").config()
const mongoose = require("mongoose")
const PORT=5000
//server route
app.get('/',(req,res)=>{
    res.send('server home page')
    })
//midleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(userRouter)

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
