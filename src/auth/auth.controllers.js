const { findUserByEmail, findUserByPhone } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

const checkUserCredentials = async (email, phone, password) => {
    let user

    if (email) {
        user = await findUserByEmail(email)
        const validPassword = comparePassword(password, user.password)

        if(!validPassword) return false
    }
    else if (phone) {
        user = await findUserByPhone(phone)
        const validPassword = comparePassword(password, user.password)

        if(!validPassword) return false
    }

    return user
}

module.exports = checkUserCredentials