let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'StrengthExercise'

let schema = new Schema({
    title: { type: String, required: true },
    authorId: { type: ObjectId, ref: 'User', required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    created: { type: Date, default: Date.now(), required: true }, // this is being set in post route
    description: { type: String, required: true },

})


module.exports = mongoose.model(schemaName, schema)