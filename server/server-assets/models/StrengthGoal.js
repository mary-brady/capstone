let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'StrengthGoal'

let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  authorId: { type: ObjectId, ref: 'User', required: true },
  created: { type: Number, required: true, default: Date.now() },
  completed: { type: Boolean, default: false }
})


module.exports = mongoose.model(schemaName, schema)