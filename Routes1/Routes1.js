const express= require('express')
const EmailModel = require('../Model1/Model1')
const { sendMail } = require('../control/control1')

const router =express.Router()
router.post('/send-email', sendMail)
module.exports=router