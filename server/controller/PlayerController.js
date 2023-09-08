const Router = require('express').Router()
const player = require('../service/Player')

Router.get('/:id', async (req, res) => {
    res.send('Player Controller loaded')
})

Router.post('/register', async (req, res) => {
    try {
        let response = await player.register(req.body)
        res.status(200).send(response)
    } catch (error) {
        throw error
    }
})


module.exports = Router