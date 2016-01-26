require('dotenv').load({silent: true});

var express = require('express');
var app = express();
var Authenticat = require('authenticat');
var mongoose = require('mongoose');
var connection = mongoose.createConnection(process.env.MONGOLAB_URI);
var authenticat = new Authenticat(connection);

var entryRouter = require(__dirname + '/routes/entry_router');

app.use('/', entryRouter);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server running on port: ' + port);
});
