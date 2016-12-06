"use strict";

var fs        = require("fs");
var path      = require("path");
var mongoose  = require("mongoose");
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var mongoUrl;

if(process.env.MONGODB_URI != undefined) {
  mongoUrl = process.env.MONGODB_URI;
} else {
  mongoUrl = config.mongo_url;
}

mongoose.connect(mongoUrl);

var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var modelDefinition = require(path.join(__dirname, file));
    var model = mongoose.model(modelDefinition.name, modelDefinition.schema);
    db[modelDefinition.name] = model;
  });

module.exports = db;