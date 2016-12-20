var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var ArticleSchema = new Schema({
  title: {
    type: String,
  },
  date: {
  	type: Date,
  },
  URL: {
  	type: String,
  }
});

// Create the Model
var Articles = mongoose.model('Articles', ArticleSchema);

// Export it for use elsewhere
module.exports = Articles;
