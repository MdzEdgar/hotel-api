const Users = require('../models/users.models')
const {hashPassword} = require("../utils/crypto");

const findAllUsers = async () => {
    return await Users.findAll()
}

const findUserById = async (id) => {
    if (!id) return null
    return await Users.findOne({
        where: {
            id: id
        }
    })
}

const findUserByEmail = async (email) => {
    return await Users.findOne({
        where: {
            email: email
        }
    })
}

const findUserByPhone = async (phone) => {
    return await Users.findOne({
        where: {
            phone: phone
        }
    })
}

const createUser = async (user) => {
    const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        password: hashPassword(user.password),
        birthday: user.birthday,
        role: user.role,
        active: user.active
    }

    const result = await Users.create(newUser)

    return result
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByEmail,
    findUserByPhone,
    createUser
}