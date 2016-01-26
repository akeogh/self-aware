var mongoose = require('mongoose');

var schemaSchema = new mongoose.Schema({
  user: String,
  title: String,
  fields: [{title: String,
    prompts: [String]
  }],
});

module.exports = exports = mongoose.model('Schema', schemaSchema);
