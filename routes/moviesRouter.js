const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/moviesController')

// index
router.get('/', moviesController.index)

// show
router.get('/:id', (req, res) => {
    res.send('show me the movie with id ' + req.params.id)
})


module.exports = router