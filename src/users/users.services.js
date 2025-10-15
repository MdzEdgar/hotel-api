const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then(data => {
            res.status(200).json({
                data
            })
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request.', error: err})
        })
}

const getUserById = (req, res) => {
    const id = req.params.id
    userControllers.findUserById(id)
        .then(data => {
            if(!data) {
                return res.status(404).json({message: `User with id: ${id}, not found`})
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request.', error: err})
        })
}

const getUserByEmail = (req, res) => {
    const email = req.query.email
    userControllers.findUserByEmail(email)
        .then(data => {
            if(!data) return res.status(404).json({message: 'User with email not found.'})
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request.', error: err})
        })
}

const getUserByPhone = (req, res) => {
    const phone = req.query.phone
    userControllers.findUserByPhone(phone)
        .then(data => {
            if(!data) return res.status(404).json({message: 'User with phone not found.'})
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request.', error: err})
        })
}

const postUser = (req, res) => {
    const userData = req.body
    userControllers.createUser(userData)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json({message: 'Bad request', err: err.message}))
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    getUserByPhone,
    postUser
}