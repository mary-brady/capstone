let router = require('express').Router()
let Posts = require('../models/Post')

//GET ALL
router.get('/', (req, res, next) => {
    Posts.find({})
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

module.exports = router