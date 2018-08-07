const mongoose = require('mongoose');


const FiresSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  long: Number
});



module.exports = mongoose.model('Fires', FiresSchema);
