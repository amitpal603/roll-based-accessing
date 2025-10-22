const User = require('../models/userSchema')
const argon2 = require('argon2')

const registerUser = async(req,res) => {
    const {username,email,password} = req.body

    try {
        const isExistsUser = await User.findOne({email})

        if(isExistsUser){
            return res.json({
                message:'user already exist'
            })
        }
        const hashPassword = await argon2.hash(password)
        const newUser = new User({username,email,password:hashPassword})
            await newUser.save()
        return res.status(201).json({
            success:true,
            message:'register successFully..'
        })
    } catch (error) {
        return res.status(500).json({
            message : `Internal server error : ${error.message}`
        })
    }
}

module.exports = registerUser