const Users = require('../models/users.models')
const { hashPassword } = require('../utils/crypto')

const findAllUsers = async () => {
    const users = await Users.findAll()
    return users
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    })
    return data
}

const findUserByEmail = async (email) => {
    const data = await Users.findOne({
        where: {
            email: email
        }
    })
    return data
}

const findUserByPhone = async (phone) => {
    const data = await Users.findOne({
        where: {
            phone: phone
        }
    })
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByEmail,
    findUserByPhone
}