let router = require('express').Router()
let StrengthEx = require('../models/StrengthExercise')

//get all strength exercises
router.get('/', (req, res, next) => {
    StrengthEx.find({})
        .then(ex => {
            res.send(ex)
            console.log('strengthEx get: ', ex)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})
//get by workout
router.get('/by-workout/:id', (req, res, next) => {
    StrengthEx.find({ workoutId: req.params.workoutId })
        .then(ex => {
            res.send(ex)
            console.log('cardio by workout get: ', ex)
        })
        .catch(err => {
            console.log(err)
            next()
        })
})

//get one exercise
router.get('/:id', (req, res, next) => {
    StrengthEx.findById(req.params.id)
        .then(ex => {
            res.send(ex)
        })
        .catch(err => {
            res.status(404).send(err)
            next()
        })
})

//create exercise
router.post('/', (req, res, next) => {
    req.body.authorId = req.session.uid
    req.body.created = Date.now()
    StrengthEx.create(req.body)
        .then(newEx => {
            res.send(newEx)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

//delete exercise
router.delete('/:id', (req, res, next) => {
    StrengthEx.findById(req.params.id)
        .then(ex => {
            if (!ex.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            StrengthEx.findByIdAndRemove(req.params.id)
                .then(ex => {
                    res.send('exercise deleted')
                })
        })
})

module.exports = router