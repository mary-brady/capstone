let router = require('express').Router()
let Quote = require('../models/Quote')

//GET
router.get('/', (req, res, next) => {
  Quote.find({ authorId: req.session.uid })
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
  Quote.create(req.body)
    .then(newQuote => {
      res.send(newQuote)
    })
    .catch(err => {
      res.status(400).send(err)
      next()
    })
})
//DELETE
router.delete('/:id', (req, res, next) => {
  Quote.findById(req.params.id)
    .then(quote => {
      if (!quote.authorId.equals(req.session.uid)) {
        return res.status(401).send("Not authorized")
      }
      Quote.findByIdAndRemove(req.params.id)
        .then(quote => {
          res.send('Delorted!')
        })
    })
})
module.exports = router