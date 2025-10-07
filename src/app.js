const express = require('express')
const cors = require('cors')

const config = require('../config')

const app = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(cors())

app.all('/{*any}', (req, res) => {
    res.status(404).json({message: 'Not Found'})
})

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`)
})