var mongoose = require('mongoose')
var connectionString = 'mongodb://admin:admin123@ds028559.mlab.com:28559/capstone'
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
    console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
    console.log('Connected to Database')
})