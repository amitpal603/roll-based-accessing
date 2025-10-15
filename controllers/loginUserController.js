const User = require('../models/userSchema')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const loginUser = async(req,res) => {
    const {email,password} = req.body
    try {
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                success:false,
                message:'User not found please register'
            })
        }

        const isPassword = await argon2.verify(user.password,password)

        if(!isPassword){
            return res.json({
                success:false,
                message:"wrong email or password "
            })
        }

        const accessToken = jwt.sign({
            userId: user._id,
            role : user.role
        },process.env.PRIVATE_KEY,{expiresIn:'1d'})

        res.cookie("token",accessToken,{ httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 10})

        return res.status(200).json({
            success:true,
            message:"login successFully .. ?"
        })
    } catch (error) {
         return res.status(500).json({
            message : `Internal server error : ${error.message}`
        })
    }
}
module.exports = loginUser