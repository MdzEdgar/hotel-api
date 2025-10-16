const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        notNull: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 255]
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 255]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        index: true,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        index: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATEONLY
    },
    role: {
        type: DataTypes.ENUM('customer', 'admin', 'superadmin'),
        defaultValue: 'customer'
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Users