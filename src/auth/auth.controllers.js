const { findUserByEmail, findUserByPhone } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

const checkUserCredentials = async (email, phone, password) => {
    let user = null

    if (email) user = await findUserByEmail(email)
    else if (phone) user = await findUserByPhone(phone)

    if (!user) return user

    const validPassword = comparePassword(password, user.password)

    if(!validPassword) return false

    return user
}

module.exports = checkUserCredentials