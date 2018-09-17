let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Strength'
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    authorId: { type: ObjectId, ref: 'User', required: true },
    created: { type: Date, default: Date.now(), required: true },
    squats: {type: Number, required:true},
    deadlifts: {type: Number, required:true},
    shoulders: {type:Number, required:true},
    benches: {type:Number, required:true},
    rows: {type:Number, required:true}
})


module.exports = mongoose.model(schemaName, schema)