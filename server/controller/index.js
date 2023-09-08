const Router = require('express').Router();

const PlayerController = require('./PlayerController')

Router.use('/player', PlayerController)

module.exports = Router