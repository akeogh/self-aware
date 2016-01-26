var express = require('express');
var jsonParser = require('body-parser').json();
var handleError = require(__dirname + "/../lib/handle_error");
var Schema = require(__dirname + '/../models/schema');

var mongoose = require('mongoose');
var connection = mongoose.createConnection(process.env.MONGOLAB_URI);

var entryRouter = exports = module.exports = express.Router();

entryRouter.use(jsonParser);

entryRouter.get('/', function(req, res) {
  res.json('hello, world!');
})
