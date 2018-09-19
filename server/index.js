var express = require('express')
var bp = require('body-parser')
var server = express()
var cors = require('cors')
var port = 3000

var whitelist = ['http://localhost:8080'];
var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
server.use(cors(corsOptions))

//Fire up database connection
require('./server-assets/db/mlab-config')


//REGISTER MIDDLEWEAR
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

let feed = require('./server-assets/routes/feed-routes')
server.use('/api/feed', feed)
let feedComments = require('./server-assets/routes/feedComments-routes')
server.use('/api/feed/comments', feedComments)

//REGISTER YOUR AUTH ROUTES BEFORE YOUR GATEKEEPER, OTHERWISE YOU WILL NEVER GET LOGGED IN
let auth = require('./server-assets/auth/routes')
server.use(auth.session)
server.use(auth.router)


//Gate Keeper Must login to access any route below this code
server.use((req, res, next) => {
    if (!req.session.uid) {
        return res.status(401).send({
            error: 'please login to continue'
        })
    }
    next()
})

//YOUR ROUTES HERE!!!!!!
let workoutRoutes = require('./server-assets/routes/workout-routes')
server.use('/api/workouts', workoutRoutes)

let cardioRoutes = require('./server-assets/routes/cardioexercise-routes')
server.use('/api/cardio-exercise', cardioRoutes)

let strengthExerciseRoutes = require('./server-assets/routes/strengthexercise-routes')
server.use('/api/strength-exercise', strengthExerciseRoutes)

let postRoutes = require('./server-assets/routes/post-routes')
server.use('/api/posts', postRoutes)

let badgeRoutes = require('./server-assets/routes/badge-routes')
server.use('/api/badges', badgeRoutes)

let weightGoalRoutes = require('./server-assets/routes/weightgoal-routes')
server.use('/api/weight-goal', weightGoalRoutes)

let strengthGoalRoutes = require('./server-assets/routes/strengthgoal-routes')
server.use('/api/strength-goal', strengthGoalRoutes)

let enduranceGoalRoutes = require('./server-assets/routes/endurancegoal-routes')
server.use('/api/endurance-goal', enduranceGoalRoutes)

let weightRoutes = require('./server-assets/routes/weight-routes')
server.use('/api/weight', weightRoutes)

let enduranceRoutes = require('./server-assets/routes/endurance-routes')
server.use('/api/endurance', enduranceRoutes)

let strengthRoutes = require('./server-assets/routes/strength-route')
server.use('/api/strength', strengthRoutes)

let quoteRoutes = require('./server-assets/routes/quote-routes')
server.use('/api/quotes', quoteRoutes)

let commentRoutes = require('./server-assets/routes/comments-routes')
server.use('/api/comments', commentRoutes)

//Catch all
server.get('*', (req, res, next) => {
    res.status(404).send({
        error: 'No matching routes'
    })
})

server.listen(port, () => {
    console.log('server running on port', port)
})