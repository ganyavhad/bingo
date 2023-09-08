const mongoose = require("mongoose")

const connect = async () => {
    let dbName = process.env.DB_NAME
    let dbUrl = process.env.DB_URL
    try {
        await mongoose.connect(`mongodb://${dbUrl}/${dbName}`);
        console.log("Connected to database")
    } catch (error) {
        console.log("Error while connecting to database")
        throw new Error('Database connection failed')
    }
}

module.exports = { connect }