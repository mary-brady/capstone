let router = require('express').Router()
let EnduranceGoals = require('../models/EnduranceGoal')

//GET
router.get('/', (req, res, next) => {
  EnduranceGoals.find({ authorId: req.session.uid })
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
  EnduranceGoals.create(req.body)
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
  EnduranceGoals.findById(req.params.id)
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
  EnduranceGoals.findById(req.params.id)
    .then(goal => {
      if (!goal.authorId.equals(req.session.uid)) {
        return res.status(401).send("Not authorized")
      }
      EnduranceGoals.findByIdAndRemove(req.params.id)
        .then(data => {
          res.send('Delorted!')
        })
    })
})

module.exports = router