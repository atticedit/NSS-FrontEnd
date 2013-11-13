var mongoose = require('mongoose');

var Player = mongoose.Schema({
  name       : String,
  color      : String,
  x          : Number,
  y          : Number,
  health     : Number,
  createdAt  : {type: Date, default: Date.now}
});

mongoose.model('Player', Player);
