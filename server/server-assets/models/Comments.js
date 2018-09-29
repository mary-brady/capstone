let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comment'

let schema = new Schema({
    author: { type: String, required: true, default: "A Persona" },
    authorId: { type: ObjectId, ref: 'User', required: true },
    created: { type: Date, default: Date.now(), required: true }, // this is being set in post route
    description: { type: String, required: true },
    postId: { type: ObjectId, ref: 'Post', required: true },

})


module.exports = mongoose.model(schemaName, schema)