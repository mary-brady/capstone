let router = require('express').Router()
let Posts = require('../models/Post')


//EDIT POST
router.put('/:id', (req, res, next) => {
    Posts.findById(req.params.id)
        .then(post => {
            if (!post.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            post.update(req.body, (err) => {
                if (err) {
                    console.log(err)
                    next()
                    return
                }
                res.send("Post updated")
            });
        })
        .catch(err => {
            console.log(err)
            next()
        })
})

//GET ALL LOGGED IN
router.get('/:id', (req, res, next) => {
    Posts.find({ authorId: req.params.id })
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

//GET ONE
router.get('/:id', (req, res, next) => {
    Posts.findById(req.params.id)
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.status(404).send(err)
            next()
        })
})


//POST
router.post('/', (req, res, next) => {
    req.body.authorId = req.session.uid
    Posts.create(req.body)
        .then(newPost => {
            res.send(newPost)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

//DELETE
router.delete('/:id', (req, res, next) => {
    Posts.findById(req.params.id)
        .then(post => {
            if (!post.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not authorized")
            }
            Posts.findByIdAndRemove(req.params.id)
                .then(data => {
                    res.send('Delorted!')
                })
        })
})

module.exports = router