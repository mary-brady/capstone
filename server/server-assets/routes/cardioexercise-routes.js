let router = require('express').Router()
let CardioEx = require('../models/CardioExercise')

//get all strength exercises
router.get('/', (req, res, next) => {
    CardioEx.find({})
        .then(ex => {
            res.send(ex)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

//get one exercise
router.get('/:id', (req, res, next) => {
    CardioEx.findById(req.params.id)
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
    CardioEx.create(req.body)
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
    CardioEx.findById(req.params.id)
        .then(ex => {
            if (!ex.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            CardioEx.findByIdAndRemove(req.params.id)
                .then(ex => {
                    res.send('exercise deleted')
                })
        })
})

module.exports = router