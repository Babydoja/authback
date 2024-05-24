const express= require('express')
const User=require('../Model/Model')
const { registerUser, loginUser } = require('../Controller/Controller')


const router =express.Router()


router.post('/register',registerUser)
router.post('/login',loginUser)
module.exports=router 