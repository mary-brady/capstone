let router = require('express').Router()
let Endurance = require('../models/Endurance')

//GET
router.get('/', (req, res, next) => {
    Endurance.find({ authorId: req.session.uid })
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
    Endurance.create(req.body)
        .then(newEndurance => {
            res.send(newEndurance)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})
//DELETE
router.delete('/:id', (req, res, next) => {
    Endurance.findById(req.params.id)
        .then(endurance => {
            if (!endurance.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            Endurance.findByIdAndRemove(req.params.id)
                .then(endurance => {
                    res.send('Delorted!')
                })
        })
})
module.exports = router