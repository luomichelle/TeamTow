var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mid = require('../middleware');

// GET /
// the Home Page
router.get('/', function(req, res, next){
	return res.render('index');
});

// GET /about
// the About Us Page
router.get('/about', function(req, res, next){
	return res.render('about');
});

// GET /contact
// the Contact Us Page
router.get('/contact', function(req, res, next){
	return res.render('contact');
});

router.get('/profile', function(req, res, next){
	return res.render('profile');
});


//  GET /register
router.get('/register', mid.loggedOut, function(req, res, next){
	return res.render('register');
});

// POST /register
router.post('/create', function(req, res, next){
	if(req.body.email && req.body.name && req.body.favoriteBook && req.body.password && req.body.confirmPassword){
		//	confirm that user typed same password twice
		if(req.body.password !== req.body.confirmPassword){
			var err = new Error('Passwords do not match.');
			err.status = 400;
			return next(err);
		}
		
		// create object with form input
		var userData = {
			email: req.body.email,
			name: req.body.name,
			password: req.body.password
		};
		// use schema's 'create' method to insert document into Mongo
		User.create(userData, function(error, user){
			if(error){
				return next(error);
			}else{
				req.session.userId = user._id;
				return res.redirect('profile');
			}
		});
	}else{
		var err = new Error('All fields required.');
		err.status = 400;
		return next(err);
	}
});

// GET /login
router.get('/login', mid.loggedOut, function(req, res, next){
	return res.render('login');
});

// GET /logout
router.get('/logout', function(req, res, next){
	if(req.session){
		// delete session object
		req.session.destroy(function(err){
			if(err){
				return next(err);
			}else{
				return res.redirect('/');
			}
		});
	}
});

// POST /login
router.post('/login', function(req, res, next){
	if(req.body.email && req.body.password){
		User.authenticate(req.body.email, req.body.password, function(error, user){
			if(error || !user){
				var err = new Error('Wrong email or password.');
				err.status = 401;
				return next(err);
			}else{
				req.session.userId = user._id;
				return res.redirect('/profile');
			}
		});
	}else{
		var err = new Error('Email and password are required.');
		err.status = 401;
		return next(err);
	}
});

// GET /profile
router.get('/profile', mid.requiresLogin, function(req, res, next){
	User.findById(req.session.userId).exec(function(error, user){
		if(error){
			return next(error);
		}else{
			return res.render('profile');
		}
	});
});

module.exports = router;