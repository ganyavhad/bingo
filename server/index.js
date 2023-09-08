const express = require('express')
const config = require('./config/load-config');
(async () => {
    const app = express()
    await config(app)

    const port = process.env.PORT

    app.listen(port, () => {
        console.log(`Server is listening on ${port}`)
    })
})()
