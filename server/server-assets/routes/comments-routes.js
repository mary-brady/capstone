let router = require('express').Router()
let Comments = require('../models/Comments')


//EDIT POST
router.put('/:id', (req, res, next) => {
    Comments.findById(req.params.id)
        .then(comment => {
            if (!comment.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            comment.update(req.body, (err) => {
                if (err) {
                    console.log(err)
                    next()
                    return
                }
                res.send("Comment updated")
            });
        })
        .catch(err => {
            console.log(err)
            next()
        })
})

//GET ALL LOGGED IN
router.get('/:id', (req, res, next) => {
    Comments.find({ authorId: req.params.id })
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})
router.get('/post/:id', (req, res, next) => {
    Comments.find({ postId: req.params.id })
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

//GET ONE
router.get('/:id', (req, res, next) => {
    Comments.findById(req.params.id)
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.status(404).send(err)
            next()
        })
})


//POST
router.post('/', (req, res, next) => {
    req.body.authorId = req.session.uid
    req.body.created = Date.now()
    Comments.create(req.body)
        .then(newComment => {
            res.send(newComment)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

//DELETE
router.delete('/:id', (req, res, next) => {
    Comments.findById(req.params.id)
        .then(comment => {
            if (!comment.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            Comments.findByIdAndRemove(req.params.id)
                .then(data => {
                    res.send('Delorted!')
                })
        })
})

module.exports = router