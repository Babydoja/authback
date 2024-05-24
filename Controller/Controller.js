const User = require("../Model/Model")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const registerUser = (async(req,res)=>{
    const{email,password}=req.body
    
    ///validation 
    if (!password||!email) {
        res.status(400).json('kindly fill the necessary details') 
    }
    if (password.length<6) {
        res.status(400).json('password must be more than 6 character')
      
    }
    const userExit= await User.findOne({email})
    if (userExit) {
        res.status(400).json("Email already exit")
    }
    //harshing the password
//    const salt= await bcrypt.getSalt(10)
//    const salt =await bcrypt.genSalt(10)
//    const hashpassword = await bcrypt.hash(password,salt)
///HASHING THE PASSWORD 
    const hashpassword = await bcrypt.hash(password,10)
    //create user
    const user = await User.create(
        {
          
            password,
            email:email,
            password:hashpassword
        }
        
    )
    res.send(user)
    console.log(user);

}
)
const loginUser= async(req,res)=>{
    const{email,password}=req.body
    const user=await User.findOne({email})
    console.log(user);
    if (!password) {
        res.json('password is not correct')
        
    }
    if (!user) {
        res.json('no user with that email')

    } else {
        const isLoginValid=await bcrypt.compare(password,user.password)
        if (isLoginValid) {
            const token = await jwt.sign({id:user._id,role:'students'},`${process.env.TOKEN_SECRET}`)
            res.status(200).json({token,userid:user._id})
        }
       
    }

}
module.exports={registerUser,loginUser}