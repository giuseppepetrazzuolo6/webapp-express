const connection = require('../database/connection')

const index = (req, res) => {

    const sql = 'SELECT * FROM movies'
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        res.json(results)

    })
}

module.exports = { index }