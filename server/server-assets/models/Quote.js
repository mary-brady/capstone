let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Quote'
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
  quote: { type: String, required: true }
})


module.exports = mongoose.model(schemaName, schema)