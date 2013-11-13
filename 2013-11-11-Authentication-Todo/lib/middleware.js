var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.findUser = function(req, res, next){
  if(req.session.userId){
    User.findById(req.session.userId, function(err, user){
      if(user){
        res.locals.user = user;
        next();
      }
    });
  } else {
    next();
  }
};

exports.isAdmin = function(req, res, next){
  console.log('here');
  if(res.locals.user.isAdmin){
    next();
  } else {
    res.end('you are not an admin');
  }
};