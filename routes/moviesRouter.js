const express = require('express')
const router = express.Router()

// /api/books
router.get('/', (req, res) => {
    res.send('show all movies here')
})

// /api/books/1
router.get('/:id', (req, res) => {
    res.send('show me the movie with id ' + req.params.id)
})


module.exports = router