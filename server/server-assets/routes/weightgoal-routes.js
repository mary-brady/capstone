let router = require('express').Router()
let WeightGoals = require('../models/WeightGoal')

//GET
router.get('/', (req, res, next) => {
    WeightGoals.find({ authorId: req.session.uid })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})


//POST
router.post('/', (req, res, next) => {
    req.body.authorId = req.session.uid
    WeightGoals.create(req.body)
        .then(newGoal => {
            res.send(newGoal)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

//PUT
router.put('/:id', (req, res, next) => {
    WeightGoals.findById(req.params.id)
        .then(goal => {
            if (!goal.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            goal.update(req.body, (err) => {
                if (err) {
                    console.log(err)
                    next()
                    return
                }
                res.send("Goal updated")
            });
        })
        .catch(err => {
            console.log(err)
            next()
        })
})

//DELETE
router.delete('/:id', (req, res, next) => {
    WeightGoals.findById(req.params.id)
        .then(goal => {
            if (!goal.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            WeightGoals.findByIdAndRemove(req.params.id)
                .then(data => {
                    res.send('Delorted!')
                })
        })
})

module.exports = router