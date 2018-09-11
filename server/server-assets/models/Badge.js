let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Badge'

let schema = new Schema({
    url: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String }
})


module.exports = mongoose.model(schemaName, schema)