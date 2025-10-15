const express = require('express')
const router = express.Router()
const registerUser = require('../controllers/signUpController')
const loginUser = require('../controllers/loginUserController')

router.post('/register',registerUser)
router.post('/login',loginUser)

module.exports = router