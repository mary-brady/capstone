let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'CardioExercise'

let schema = new Schema({
    title: { type: String, required: true },
    authorId: { type: ObjectId, ref: 'User', required: true },
    time: { type: Number, required: true },
    created: { type: Date, default: Date.now(), required: true }, // this is being set in post route
    description: { type: String, }

})


module.exports = mongoose.model(schemaName, schema)