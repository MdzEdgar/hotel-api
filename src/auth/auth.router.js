const router = require('express').Router()
const login = require('./auth.services')

router.post('/login', login)

module.exports = router