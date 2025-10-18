const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const userRouters = require('./routers/userRouters')
const cors = require('cors')
const app  = express()
connectDB()

const corsOption = {
    origin: 'http://localhost:5173',
    methods : ["GET","POST","PUT","DELETE"],
    credential : true
}
app.use(express.json())
app.use('/user',userRouters)
app.use(cors(corsOption))
app.get('/', (req,res) => {
    res.send('Hello world !')
})

const PORT  = process.env.PORT || 4000

app.listen(PORT , () => console.log(`server running http://localhost:${PORT}`))