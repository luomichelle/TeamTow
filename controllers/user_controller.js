var express = require('express');
var router = express.Router();
var pwUtil = require('../helpers/password');

var User = require('../models').User;

//this is the users_controller.js file
router.get('/signup-signin', function(req,res) {
	res.render('users/signup-signin', {
		layout: 'main-registration'
	});
});

router.post("/sign-up", function(req, res) {
  User.find({email: req.body.email}, function(err, users) {
    if(err) throw err;
    if(users.length > 0) throw new Error("We already have a user with that name");

    pwUtil.hash(req.body.password, function(err, hash) {

      if(err) throw err;

      var user = new User({
        username: req.body.username,
        password_hash: hash,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      });

      user.save(function(err) {

        if(err) throw err;

        req.session.logged_in = true;
        // the username to the session
        req.session.username = user.username;
        // and the user's email.
        req.session.user_email = user.email;

        req.session.firstName = user.firstName;

        req.session.lastName = user.lastName;

        res.render('index', {
          email: req.session.user_email,
          logged_in: req.session.logged_in,
          username: req.session.username,
          firstName: req.session.firstName,
          lastName: req.session.lastName
        });
      });
    });
  });
});

router.post("/sign-in", function(req, res) {
  User.find({email: req.body.email}, function(err, users) {
    if(err) throw err;
    if(users.length > 1) throw new Error("More than one user with the same name!");

    var user = users[0];
    user.validatePassword(req.body.password, function(err, success) {
      if(err) throw err;

      if(success) {

        req.session.logged_in = true;
        // the username to the session
        req.session.username = user.username;
        // and the user's email.
        req.session.user_email = user.email;

        req.session.firstName = user.firstName;

        req.session.lastName = user.lastName;

        res.render('index', {
          email: req.session.user_email,
          logged_in: req.session.logged_in,
          username: req.session.username,
          firstName: req.session.firstName,
          lastName: req.session.lastName
        });
      } else {
        req.session.logged_in = false;
        res.redirect("/");
      }
    });
  });
});

router.get("/sign-out", function(req,res) {
  req.session.destroy(function(err) {
     res.redirect("/")
  })
});

module.exports = router;
