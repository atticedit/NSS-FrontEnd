var mongoose = require('mongoose');
var Song = mongoose.model('Song');
var Artist = mongoose.model('Artist');

/*
 * GET /artists
 */

exports.index = function(req, res){
  Artist.find(function(err, artists){
    res.render('artists/index', {title: 'Music for Ears | Artists', artists: artists});
  });
};

/*
 * GET /artists/new
 */

exports.new = function(req, res){
  Song.find(function(err, songs){
    res.render('artists/new', {title: 'Music for Ears | New Artist', songs: songs});
  });
};

/*
 * POST /artists
 */

exports.create = function(req, res){
  console.log('--before--');
  console.log(req.body);

  new Artist(req.body).save(function(err, artist, count){
    console.log('--after--');
    console.log(artist);
    res.redirect('/artists');
  });
};

/*
 * GET /artists/:id/edit
 */

exports.edit = function(req, res){
  res.render('artists/edit', {title: 'Music for Ears | Edit Artist'});
};

/*
 * PUT /artists/:id
 */

exports.update = function(req, res){
  res.redirect('/artists' + req.params.id);
};

/*
 * GET /artists/:id
 */

exports.show = function(req, res){
  Artist.findById(req.params.id, function(err, artist){
    res.render('artists/show', {title: 'Music for Ears | Show Artist', artist: artist});
  });
};

/*
 * DELETE /artists/:id
 */

exports.delete = function(req, res){
  Artist.findByIdAndRemove(req.params.id, function(err){
    res.redirect('/artists');
  });
};