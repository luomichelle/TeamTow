var bcrypt = require('bcryptjs');

module.exports = {
  validate: function(text, hash, callback) {
    bcrypt.compare(text, hash, callback);
  },
  hash: function(text, callback) {
    bcrypt.genSalt(10, function(err, salt) {
      if(err) return callback(err);
      bcrypt.hash(text, salt, callback);
    });
  }
}
