
// Get dependencies
const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const cookieParser = require('cookie-parser')
//const [a,b] = require('./server/models/schema');


<<<<<<< HEAD
//console.log(' secret here' + b)
// Get our API routes
const app = express()
//const api = require('./server/routes/api')

/*app.use(passport.initialize())
app.use(passport.session())

require('./server/passport')(passport)
*/
// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(cookieParser(config.cookieSecret)) //cookies of the current Session
=======
// Get our API routes
const app = express()
/*
const api = require('./server/routes/api')

app.use(passport.initialize())
app.use(passport.session())
require('./server/passport')(passport)
*/

// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
>>>>>>> master

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')))

// Set our api routes
<<<<<<< HEAD
//app.use('/',api)

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './my-app/dist/index.html'))
=======
// app.use('/',api)

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './myapp/dist/index.html'))
>>>>>>> master
});


//Get port from environment and store in Express
const port = process.env.PORT || '8080'
app.set('port', port)


//Create HTTP server
const server = http.createServer(app)

//Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`API running on localhost:${port}`))