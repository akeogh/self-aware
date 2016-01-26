var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  displayName: String,
  schemas: [String]
});

module.exports = exports = mongoose.model('User', userSchema);
