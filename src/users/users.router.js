const router = require('express').Router()

const userServices = require('./users.services')

router.route('/')
    .get(userServices.getAllUsers)
    .post(userServices.postUser)

router.route('/:id')
    .get(userServices.getUserById)

router.route('/email/:email')
    .get(userServices.getUserByEmail)

router.route('/phone/:phone')
    .get(userServices.getUserByPhone)

module.exports = router