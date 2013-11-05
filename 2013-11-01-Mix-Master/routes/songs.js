var mongoose = require('mongoose');
var Song = mongoose.model('Song');

/*
 * GET /songs
 */

exports.index = function(req, res){
  Song.find(function(err, songs){
    res.render('songs/index', {title: 'Songs', songs: songs});
  })
};

/*
 * GET /songs/new
 */

exports.new = function(req, res){
  res.render('songs/new', {title: 'New Song', song: new Song});
};

/*
 * POST /songs
 */

exports.create = function(req, res){
  console.log('--before--');
  console.log(req.body);
  req.body.genres = req.body.genres.split(', ');
  new Song(req.body).save(function(err, song, count){
    console.log('--after--');
    console.log(song);
    res.redirect('/songs');                                                             /*redirect changed Tue 5:30*/
  });
};

/*
 * GET /songs/:id
 */

exports.show = function(req, res){
  Song.findById(req.params.id, function(err, song){
    res.render('songs/show', {title: 'Show Song', song: song});
  });
};

/*
 * GET /songs/:id/edit
 */

exports.edit = function(req, res){
  Song.findById(req.params.id, function(err, song){
    res.render('songs/edit', {title: 'Edit Song', song: song});
  });
};

/*
 * PUT /songs/:id
 */

exports.update = function(req, res){
  Song.findByIdAndUpdate(req.params.id, req.body, function(err, song){
    res.redirect('/songs/' + req.params.id);                                            /*url changed Tue 5:30*/
  });
};

/*
 * DELETE /songs/:id
 */

exports.delete = function(req, res){
  Song.findByIdAndRemove(req.params.id, function(err){
    res.redirect('/songs');
  });
};