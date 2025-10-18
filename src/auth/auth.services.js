const authControllers = require('../auth/auth.controllers')
const jwt = require('jsonwebtoken')
const { jwtSecret  } = require('../../config')

const login = (req, res) => {
    const { email, phone, password } = req.body
    authControllers.checkUserCredentials(email, phone, password)
        .then(data => {
            if(!data) return res.status(401).json({message: ' Invalid credentials.'})

            const token = jwt.sign({
                id: data.id,
                role: data.role
            }, jwtSecret)

            res.status(200).json({token})
        })
        .catch(err => res.status(400).json(err))
}

const register = (req, res) => {
    const userData = req.body
    authControllers.registerUser(userData)
        .then(() => res.status(201).json({message: 'User created.'}))
        .catch(err => res.status(400).json({message: 'Bad request.', error: err}))
}

module.exports = {
    login,
    register
}