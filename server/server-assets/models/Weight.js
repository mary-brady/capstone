let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Weight'
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    authorId: { type: ObjectId, ref: 'User', required: true },
    created: { type: Date, default: Date.now(), required: true },
    weight: {type: Number, required: true}
})


module.exports = mongoose.model(schemaName, schema)