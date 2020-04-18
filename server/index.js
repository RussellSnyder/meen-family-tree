const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/family-tree');

// set the static files location for our Ember application
// app.use(express.static(__dirname + '/public'));

//bodyParser Middleware to allow different encoding requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());       // to support JSON-encoded bodies


//Routes API
const router = express.Router();
app.use('/', router);
require('./routes/routes')(router); // configure our routes

console.log(`app started on http://localhost:${port}`)

app.listen(port);


// expose app
exports = module.exports = app;