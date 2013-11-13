// var colors = require('colors');

// Colors
// bold, italic, underline, inverse, yellow, cyan,
// white, magenta, green, red, grey, blue, rainbow,
// zebra, random

/*
 * GET /
 */

exports.index = function(req, res){
  console.log('home.index');
  res.render('home/index', {title: 'To Dos', user: res.locals.user});
};
