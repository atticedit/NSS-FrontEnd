
/*
 * GET /colors
 */

exports.index = function(req, res){
  var colors = ['blue', 'green', 'red', 'orange'];
  res.render('colors/index', {title: 'Colors', colors: colors});
};
