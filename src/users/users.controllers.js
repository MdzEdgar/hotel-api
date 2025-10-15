const Users = require('../models/users.models')
const {hashPassword} = require("../utils/crypto");

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