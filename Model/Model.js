const mongoose = require('mongoose')
const userScheme= mongoose.Schema(
    {
        email:{
            type:String,
            required:[true,'Add your email'],
            unique:true,
            trim:true,
            match:[ /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'please enter a valid email']
        },
        password:{
            type:String,
            required:[true,'Add your password'],
            minLength:[6,"please must be more than 6 character "]
        }
    },
    {
        timestamps:true
    }
)

const User = mongoose.model('users',userScheme)

module.exports = User;