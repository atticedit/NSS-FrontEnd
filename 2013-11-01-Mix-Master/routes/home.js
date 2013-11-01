
/*
 * GET /
 */

exports.index = function(req, res){
  res.render('home/index', {title: 'Music for Ears | Home'});
};
