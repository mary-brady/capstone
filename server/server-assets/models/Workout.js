let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Workout'

let schema = new Schema({
    title: { type: String, required: true },
    authorId: { type: ObjectId, ref: 'User', required: true },
    created: { type: Date, default: Date.now(), required: true }, // this is being set in post route
    description: { type: String, required: true },
    cardio: [{ type: ObjectId, ref: 'CardioExercise' }],
    strength: [{ type: ObjectId, ref: 'StrengthExercise' }]

})



module.exports = mongoose.model(schemaName, schema)