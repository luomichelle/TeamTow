var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var app = express();
var debug = require('debug')('express-example');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var bparser = require('body-parser');
var cookieParser = require('cookie-parser');

// mongodb connection
mongoose.connect('mongodb://localhost:27017/itow');
var db = mongoose.connection;

// mongo error
db.on('error', console.error.bind(console, 'Connection Error:'));

// use sessions for tracking logins
app.use(session({
	secret: 'itow loves you',
	resave: true,
	saveUninitialized: false,
	store: new MongoStore({
		mongooseConnection: db
	})
}));
// make user ID available in templates
app.use(function(req, res, next){
	res.locals.currentUser = req.session.userId;
	next();
});

//	Parse incoming requests
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


// Override POST to have DELETE and PUT
app.use(methodOverride('_method'))
app.use(cookieParser());


// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));

// Set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Include Routes
var routes = require('./routes/index');
app.use('/', routes);

// Catch 404 and forward to error handler
app.use(function(req, res, next){
	var err = new Error('File Not Found');
	err.status = 400;
	next(err);
});

// Error Handler
// Define as the last app.use callback
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


app.set('port', process.env.PORT || 3000);

// Set app to listen to the port above
var server = app.listen(app.get('port'), function() {
  	// Save a log of the listening to the debugger
  		console.log('Express App listening on Port 3000');
    debug('Express server listening on port ' + server.address().port);
  });


module.exports = app;