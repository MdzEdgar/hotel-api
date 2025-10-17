const bcrypt = require('bcrypt')
const crypto = require('crypto')

const hashPassword = (plainPassword) => {
    const data = bcrypt.hashSync(plainPassword, 10)
    return data
}

const comparePassword = (plainPassword, hashedPassword) => {
    const data = bcrypt.compareSync(plainPassword, hashedPassword)
    return data
}

const generateRandomToken = (length = 32) => {
    return crypto.randomBytes(length).toString('hex')
}

module.exports = {
    hashPassword,
    comparePassword,
    generateRandomToken
}