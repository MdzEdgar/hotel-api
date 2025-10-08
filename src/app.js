const express = require('express')
const cors = require('cors')

const config = require('../config')
const PORT = config.port
const db = require('./utils/database')

const app = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(cors())

app.all('/{*any}', (req, res) => {
    res.status(404).json({message: 'Not Found'})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})