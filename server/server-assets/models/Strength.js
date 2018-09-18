let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Strength'
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    authorId: { type: ObjectId, ref: 'User', required: true },
    created: { type: Date, default: Date.now(), required: true },
    squats: { type: Number },
    deadlifts: { type: Number },
    shoulders: { type: Number },
    benches: { type: Number },
    rows: { type: Number }
})


module.exports = mongoose.model(schemaName, schema)