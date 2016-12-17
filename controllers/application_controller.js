var express = require('express');
var router  = express.Router();
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var User = require('../models').User;
var Request = require('../models').Request;
var Trucks = require('../models').Truck;


// router.get('/', function(req, res) {
//   res.render('index');
// });

router.get('/', function(req, res) {
	res.redirect('/index');
});

router.get('/index', function(req,res) {
  res.render('trucks/test', {
    layout: 'main-registration'
  });
});


router.post('/geolocator',function(req,res){
	console.log(req.body);
	var userName = req.body.username;
	var lat = req.body.latitude;
	var lng = req.body.longitude;
	User.update({username:userName}, {latitude:lat,longitude:lng,loggedin:true}, 
    function(err, num) {
        console.log("updated "+userName);
    });

})

router.get('/loggedinusers', function(req,res){
	User.find({loggedin : true}, function(err,data) {
		if (err) {
			throw err;
		}
		res.json(data);
	})
})

router.get('/truckUserCoords/:truckName?', function(req,res){
	var truckName = req.params.truckName;
	Trucks.find({username : truckName}, function(err,data){
		res.json(data);
	})
})

router.post('/helpRequest', function(req,res){
	var userRequest = req.body;
	console.log(userRequest);
	 var request = new Request({
   	username: req.body.username,
     latitude: req.body.latitude,
     longitude: req.body.longitude
   })
	  request.save(function(err,post){
	  	if (err) {console.log(err)}
	  	res.send('success');	

	  }) 
})

router.get('/getStatus/:userName?', function(req,res){
	var userName = req.params.userName;
	console.log(userName)
	Request.find({username: userName}, function(err,data){
		if(err){console.log(err)}
			else{res.json(data)};
	})

})

//======================= TRUCKS ===========================
router.post('/geolocatorTruck',function(req,res){
	console.log(req.body);
	var userName = req.body.username;
	var lat = req.body.latitude;
	var lng = req.body.longitude;
	Trucks.update({username:userName}, {latitude:lat,longitude:lng,loggedin:true}, 
    function(err, num) {
    	if(err){console.log(err)}
    	else{console.log("updated "+userName)};
    });

})

router.get('/requests', function(req,res){
	Request.find({}, function(err,data){
		res.json(data);
	})
})

router.post('/userRequestAccepted', function(req,res){
	var requestDetails = req.body;
	Request.update({username: requestDetails.usernameUser},{resolved: true, driverid: requestDetails.usernameCompany}, function(err,data){
		if(err){console.log(err)}
		else{res.json("success")}
	})
})




module.exports = router;
