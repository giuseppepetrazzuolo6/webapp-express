const connection = require('../database/connection')

const index = (req, res) => {

    const sql = 'SELECT * FROM movies'
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        res.json(results)

    })
}

const show = (req, res) => {
    const id = Number(req.params.id)

    const sql = 'SELECT * FROM movies WHERE id = ?'
    const sqlReviews = 'SELECT id, name, vote, text, created_at FROM reviews WHERE movie_id = ?'
    connection.query(sql, [id], (err, response) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        if (response.length == 0) return res.status(404).json({ error: true, message: err.message })

        const movie = response[0]

        connection.query(sqlReviews, [id], (errReviews, resultsReviews) => {
            if (errReviews) return res.status(500).json({ error: true, message: errReviews.message })
            movie.reviews = resultsReviews
            res.json(movie)
        })
    })
}

const storeReview = (req, res) => {
    const movieId = Number(req.params.id)
    const { name, vote, text } = req.body

    const sql = 'INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)'
    console.log(movieId, name, vote, text);
    connection.query(sql, [movieId, name, vote, text], (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        res.status(200).json({ message: 'review created', reviewId: results.insertId })
    })
}

module.exports = { index, show, storeReview }