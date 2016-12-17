var express = require('express');
var router  = express.Router();

router.get('/', function(req,res) {
  res.render('characters/select-character', {
    layout: 'main-character'
  });
});


// router.post('/create', function (req, res) {
  
//   // SOLUTION:
//   // =========
//   // use the Cat model to create a cat based on what's
//   // passed in req.body (name, sleepy, user_id)
//   models.Cat.create({
//     name: req.body.name,
//     sleepy: req.body.sleepy,
//     user_id: req.session.user_id
//   })
//   // connect the .create to this .then
//   .then(function() {
//     res.redirect('/');
//   })
// });

// router.put('/update/:id', function(req,res) {
//   // SOLUTION:
//   // =========
//   // use the Cat model to update a cat's sleepy status
//   // based on the boolean passed in req.body sleepy
//   // and the id of the cat (as passed in the url)
//   models.Cat.update(
//   {
//     sleepy: req.body.sleepy
//   },
//   {
//     where: { id : req.params.id }
//   })
//   // connect it to this .then.
//   .then(function (result) {
//     res.redirect('/');
//   })
// });


// router.delete('/delete/:id', function(req,res) {
//   // SOLUTION:
//   // =========
//   // use the Cat model to delete a cat
//   // based on the id passed in the url
//   models.Cat.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   // connect it to this .then.
//   .then(function() {
//     res.redirect('/');
//   })
// });


module.exports = router;
