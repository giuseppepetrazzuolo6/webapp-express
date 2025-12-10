const express = require('express')
const app = express()
const PORT = 3000
const connection = require('./database/connection')

// body parser
app.use(express.json())
// static assets
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('My movies reviews API server')
})