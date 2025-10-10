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

module.exports = {
    getAllUsers,
    getUserById
}