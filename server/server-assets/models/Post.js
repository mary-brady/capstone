let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Post'

let schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true, default: "A Persona" },
    authorId: { type: ObjectId, ref: 'User', required: true },
    created: { type: Date, default: Date.now(), required: true }, // this is being set in post route
    description: { type: String, required: true },
    numUp: { type: Number, required: true, default: 0 },
    numDown: { type: Number, required: true, default: 0 }
})


module.exports = mongoose.model(schemaName, schema)