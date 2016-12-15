var Schema = require('mongoose').Schema;
var passwordUtil = require('../helpers/password');

var user = module.exports = {
  name: "Truck",
  schema: new Schema({
    username: {type: String, required: true, unique: true},
    password_hash: {type: String, required: true},
    email: {type: String, required: true},
    account_role: {type: String, default: "truck"},
    phone: {type: Number, default: 0},
    firstName: {type: String},
    lastName: {type: String},
    latitude: {type: Number, default: 0},
    longitude: {type: Number, default:0},
    loggedin: {type: Boolean, default:false}
  })
};

user.schema.methods.validatePassword = function(pw, cb) {
  passwordUtil.validate(pw, this.password_hash, cb);
}
