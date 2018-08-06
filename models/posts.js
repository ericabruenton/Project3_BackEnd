const mongoose = require('mongoose');


const PostsSchema = new mongoose.Schema({
  username: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true},
  title: String,
  body: String
});

module.exports = mongoose.model('Posts', PostsSchema);
