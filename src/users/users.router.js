const router = require('express').Router()

const userServices = require('./users.services')

router.route('/')
.get(userServices.getAllUsers)

router.route('/:id')
.get(userServices.getUserById)

module.exports = router