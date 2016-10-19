var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var app = express(); 						        // create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb
var port = process.env.PORT || 8080; 				// set the port
var database = require('./config/database'); 		// load the database config
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===============================================================
mongoose.connect(database.remoteUrl); 	// Connect to local MongoDB instance. A remoteUrl is also available (mlab.com)

app.use(express.static(path.join(__dirname, 'public/spa/views')));
app.use(express.static(path.join(__dirname, 'public')));		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// routes ======================================================================
require('./app/api/football.js')(app);
require('./app/routes.js')(app);

// Return index handler. and angular will be responsable for routes.
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
