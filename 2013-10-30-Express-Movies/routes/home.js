
/*
 * GET /
 */

exports.index = function(req, res){
  res.render('home/index', {title: 'Cinematic App | Home'});
};
