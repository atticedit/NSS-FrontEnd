var mongoose = require('mongoose');
var Song = mongoose.model('Song');
var Artist = mongoose.model('Artist');

/*
 * GET /artists
 */

exports.index = function(req, res){
  Artist.find(function(err, artists){
    res.render('artists/index', {title: 'Artists', artists: artists});
  });
};

/*
 * GET /artists/new
 */

exports.new = function(req, res){
  Song.find(function(err, songs){
    res.render('artists/new', {title: 'New Artist', songs: songs, artist: new Artist});
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
 * GET /artists/:id
 */

exports.show = function(req, res){
  Artist.findById(req.params.id, function(err, artist){
    res.render('artists/show', {title: 'Show Artist', artist: artist});
  });
};

/*
 * GET /artists/:id/edit
 */

exports.edit = function(req, res){
  Artist.findById(req.params.id, function(err, artist){
    res.render('artists/edit', {title: 'Edit Artist', artist: artist});
  });
};

/*
 * PUT /artists/:id
 */

exports.update = function(req, res){
  Artist.findByIdAndUpdate(req.params.id, req.body, function(err, artist){              /*function added to url Tue AM*/
    res.redirect('/artists/' + req.params.id);                                          /*slash added to back of url Tue AM*/
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