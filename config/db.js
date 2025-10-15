const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connected successFUlly !')
    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports = connectDB