const router = require('express').Router()
const authServices = require('./auth.services')

router.post('/login', authServices.login)

router.post('/register', authServices.register)

module.exports = router