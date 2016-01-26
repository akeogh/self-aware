var mongoose = require('mongoose');

var entrySchema = new mongoose.Schema({
  user: String,
  schema: String,
  date: Date,
  fields: [{title: String,
            value: String}],
  notes: String
});

module.exports = exports = mongoose.model('Entry', entrySchema);
