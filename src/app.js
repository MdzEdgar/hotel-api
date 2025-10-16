const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const config = require('../config')
const PORT = config.port

const db = require('./utils/database')
const initModels = require('./models/initModels')

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

const app = express()

db.authenticate()
    .then(() => console.log('Database authenticated.'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database synced.'))
    .catch(err => console.log(err))

app.disable('x-powered-by')
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.all('/{*any}', (req, res) => {
    res.status(404).json({message: 'Not Found'})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

module.exports = app