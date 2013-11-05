var mongoose = require('mongoose');
var Genre = mongoose.model('Genre');
var Song = mongoose.model('Song');

/*
 * GET /genres
 */

exports.index = function(req, res){
  Genre.find(function(err, genres){
    res.render('genres/index', {title: 'Genres', genres: genres});
  })
};

/*
 * GET /genres/new
 */

exports.new = function(req, res){
  Song.find(function(err, songs){                                                         /*function added Tue AM*/
    res.render('genres/new', {title: 'New Genre', songs: songs, genre: new Genre()});
  });
};

/*
 * POST /genres
 */

exports.create = function(req, res){
  new Genre(req.body).save(function(err, genre, count){
    if(err){
      res.render('genres/new', {title: 'New Genre', errors: err.errors, genre: genre}); /*new Genre() > genre Tue AM*/
    } else {
      res.redirect('/genres');
    }
  });
};

/*
 * GET /genres/:id
 */

exports.show = function(req, res){
  Genre.findById(req.params.id, function(err, genre){
    res.render('genres/show', {title: 'Show Genre', genre: genre});                     /*Tue AM*/
  });
};

/*
 * GET /genres/:id/edit
 */

exports.edit = function(req, res){
  Genre.findById(req.params.id, function(err, genre){
    res.render('genres/edit', {title: 'Edit Genre', genre: genre});
  });
};

/*
 * PUT /genres/:id
 */

exports.update = function(req, res){
  Genre.findByIdAndUpdate(req.params.id, req.body, function(err, genre){
    res.redirect('/genres/' + req.params.id);                                           /*url changed Tue AM*/
  });
};

/*
 * DELETE /genres/:id
 */

exports.delete = function(req, res){
  Genre.findByIdAndRemove(req.params.id, function(err){                                 /*Tue AM*/
    res.redirect('/genres');
  });
};