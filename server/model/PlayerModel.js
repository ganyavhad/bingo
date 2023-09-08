const mongoose = require('mongoose')
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Player', playerSchema);
