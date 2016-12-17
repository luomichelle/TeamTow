var Schema = require('mongoose').Schema;

var user = module.exports = {
  name: "Request",
  schema: new Schema({
    username: {type: String, required: true},
    latitude: {type: Number, default: 0},
    longitude: {type: Number, default:0},
    resolved: {type: Boolean, default:false},
    driverid: {type:String, default:''}
  })
};

