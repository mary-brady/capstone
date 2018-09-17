let router = require('express').Router()
let Strength = require('../models/Strength')

//GET
router.get('/', (req, res, next) => {
    Strength.find({ authorId: req.session.uid })
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
    Strength.create(req.body)
        .then(newStrength => {
            res.send(newStrength)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})
//DELETE
router.delete('/:id', (req, res, next) => {
    Strength.findById(req.params.id)
        .then(strength => {
            if (!strength.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            Strength.findByIdAndRemove(req.params.id)
                .then(strength => {
                    res.send('Delorted!')
                })
        })
})
module.exports = router