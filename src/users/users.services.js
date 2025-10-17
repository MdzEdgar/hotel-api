const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then(data => {
            res.status(200).json(data)
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
                return res.status(404).json({message: 'User not found.'})
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request.', error: err})
        })
}

const getUserByEmail = (req, res) => {
    const email = req.params.email
    userControllers.findUserByEmail(email)
        .then(data => {
            if(!data) return res.status(404).json({message: 'User not found.'})
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request.', error: err})
        })
}

const getUserByPhone = (req, res) => {
    const phone = req.params.phone
    userControllers.findUserByPhone(phone)
        .then(data => {
            if(!data) return res.status(404).json({message: 'User not found.'})
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request.', error: err})
        })
}

const saveUser = (req, res) => {
    const userData = req.body
    userControllers.createUser(userData)
        .then(() => res.status(201).json({message: 'User created.'}))
        .catch((err) => res.status(400).json({message: 'Bad request', error: err}))
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    getUserByPhone,
    saveUser
}