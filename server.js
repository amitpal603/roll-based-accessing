const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const app  = express()
connectDB()
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Hello world !')
})

const PORT  = process.env.PORT || 4000

app.listen(PORT , () => console.log(`server running http://localhost:${PORT}`))