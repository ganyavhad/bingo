const express = require('express')
const { config } = require('dotenv')
const db = require('./db')

// routes
const routes = require("../controller/index");

module.exports = async (app) => {
    config()
    await db.connect()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(routes)
    app.get('/', (req, res) => {
        res.status(200).send('Hello World')
    })
}