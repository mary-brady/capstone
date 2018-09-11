let router = require('express').Router()
let Badges = require('../models/Badge')

//GET ALL
router.get('/', (req, res, next) => {
    Badges.find({})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

//GET ONE
router.get('/:id', (req, res, next) => {
    Badges.findById(req.params.id)
        .then(badge => {
            res.send(badge)
        })
        .catch(err => {
            res.status(404).send(err)
            next()
        })
})

//EDIT
router.put('/:id', (req, res, next) => {
    Badges.findById(req.params.id)
        .then(badge => {
            badge.update(req.body, (err) => {
                if (err) {
                    console.log(err)
                    next()
                    return
                }
                res.send("Badge updated")
            });
        })
        .catch(err => {
            console.log(err)
            next()
        })
})

//POST
router.post('/', (req, res, next) => {
    req.body.authorId = req.session.uid
    Badges.create(req.body)
        .then(newBadge => {
            res.send(newBadge)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

//DELETE
router.delete('/:id', (req, res, next) => {
    Badges.findById(req.params.id)
        .then(badge => {
            Badges.findByIdAndRemove(req.params.id)
                .then(data => {
                    res.send('Delorted!')
                })
        })
})

module.exports = router