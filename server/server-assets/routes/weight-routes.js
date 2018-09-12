let router = require('express').Router()
let Weight = require('../models/Weight')

//GET
router.get('/', (req, res, next) => {
    Weight.find({ authorId: req.session.uid })
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
    Weight.create(req.body)
        .then(newWeight => {
            res.send(newWeight)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})
//DELETE
router.delete('/:id', (req, res, next) => {
    Weight.findById(req.params.id)
        .then(weight => {
            if (!weight.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            Weight.findByIdAndRemove(req.params.id)
                .then(weight => {
                    res.send('Delorted!')
                })
        })
})
module.exports = router