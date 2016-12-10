var express = require('express');
var router  = express.Router();
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var User = require('../models').User;


// router.get('/', function(req, res) {
//   res.render('index');
// });



router.get('/', function(req, res) {
  res.render('index');
});
router.get('/', function(req, res) {
  res.render('index');
});


router.post('/geolocator',function(req,res){
	console.log(req.body);
	var userName = req.body.username;
	var lat = req.body['coords[lat]'];
	var lng = req.body['coords[lng]'];
	User.update({username:userName}, {latitude:lat,longitude: lng}, 
    function(err, num) {
        console.log("updated "+userName);
    });

})
// router.get('/client', function(req, res) { 
//     res.render('client', {
//         clientId: req.query.clientId
//     });
// });

// app.get('/truck', function(req, res) {
//     res.render('truck', {
//         userId: req.query.userId
//      });
// });


// io.on('connection', function(socket) { //Listen on the 'connection' event for incoming sockets
//     console.log('A user just connected');

//     socket.on('join', function(data) {
//         if(socket.join(data.userId)){
//                     console.log("User joined room: " + data.userId);
//         }
//         if (socket.join(data.clientId)) {
//                     console.log("User joined room: " + data.clientId);
//                 }

//             });

//     routes.initialize(app, db, socket, io); //Pass socket and io objects that we could use at different parts of our app
//         });



module.exports = router;
