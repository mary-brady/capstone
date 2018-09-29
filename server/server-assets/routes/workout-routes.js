let router = require('express').Router()
let Workouts = require('../models/Workout')

//Edit Workout
router.put('/:id', (req, res, next) => {
    Workouts.findById(req.params.id)
        .then(workout => {
            if (!workout.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            workout.update(req.body, (err) => {
                if (err) {
                    console.log(err)
                    next()
                    return
                }
                res.send("workout updated")
            });
        })
        .catch(err => {
            console.log(err)
            next()
        })
})

//this will add exercise to workout
//front end needs to send a type: 'either strength or cardio flag'
//id: 'lasdkfklsadjf823xc'
router.put('/:id/exercise/', (req, res, next) => {
    let type = req.body.type
    Workouts.findById(req.params.id)
        .then(workout => {
            workout[type].push(req.body.exercise)
            workout.save()
            res.send(workout)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

//get all workouts
router.get('/', (req, res, next) => {
    Workouts.find({}).populate("cardio strength").exec((err, docs) => {
        res.send(docs);
    })
})

//get one workout
router.get('/:id', (req, res, next) => {
    Workouts.findById(req.params.id)
        .then(workout => {
            res.send(workout)
        })
        .catch(err => {
            res.status(404).send(err)
            next()
        })
})

//create workout
router.post('/', (req, res, next) => {
    req.body.authorId = req.session.uid
    req.body.created = Date.now()
    Workouts.create(req.body)
        .then(newWorkout => {
            res.send(newWorkout)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

//delete workout
router.delete('/:id', (req, res, next) => {
    Workouts.findById(req.params.id)
        .then(workout => {
            if (!workout.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            Workouts.findByIdAndRemove(req.params.id)
                .then(data => {
                    res.send('workout deleted')
                })
        })
})

module.exports = router