const express = require('express')
const cors = require('cors')

const config = require('../config')
const PORT = config.port
const db = require('./utils/database')
const initModels = require('./models/initModels')

const app = express()

db.authenticate()
    .then(() => console.log('Database authenticated.'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database synced.'))
    .catch(err => console.log(err))

app.disable('x-powered-by')
app.use(express.json())
app.use(cors())

app.all('/{*any}', (req, res) => {
    res.status(404).json({message: 'Not Found'})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})