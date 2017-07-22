'use strict';

// Get dependencies
const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const cookieParser = require('cookie-parser')

// Get our API routes
const app = express()
const api = require('./server/routes/api')

/*
app.use(passport.initialize())
app.use(passport.session())
require('./server/passport')(passport)
*/

// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(cookieParser(config.cookieSecret)) //cookies of the current Session

// Point static path to dist
app.use(express.static(path.join(__dirname, 'my-app/dist')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set our api routes
app.use('/',api)

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './my-app/dist/index.html'))
});


//Get port from environment and store in Express
const port = process.env.PORT || '8080'
app.set('port', port)


//Create HTTP server
const server = http.createServer(app)

//Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`Server running on localhost:${port}`))