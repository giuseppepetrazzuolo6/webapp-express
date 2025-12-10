const express = require('express')
const app = express()
const PORT = 3000
const moviesRouter = require('./routes/moviesRouter')
const serverError = require('./middleware/serverError')

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

app.use('/api/movies', moviesRouter)

app.use(serverError)