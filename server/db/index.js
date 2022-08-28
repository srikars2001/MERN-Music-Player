const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://snehabhaskara:yC2WrODZCi68nTNy@webdevdb.mgiig.mongodb.net/music?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
