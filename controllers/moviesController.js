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
    connection.query(sql, [id], (err, response) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        if (response.length == 0) return res.status(404).json({ error: true, message: err.message })

        res.json(response[0])
    })
}



module.exports = { index, show }