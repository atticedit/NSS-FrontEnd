var db = require('../modules/database');
var file = __dirname + '/../db/movies.json';
var Movie = require('../models/movie');
var _ = require('lodash');

/*
 * GET /movies
 */

exports.index = function(req, res){
  var genericMovies = db.read(file);
  var movies = _.map(genericMovies, function(genericMovie){
    return new Movie(genericMovie);
  });
  res.render('movies/index', {title: 'Cinematic App | Movies Page', movies: movies});
};

/*
 * DELETE /movies/Rushmore (for example)
 */

exports.delete = function(req, res){
  var title = req.params.title;
  var movies = db.read(file);
  movies = _.reject(movies, function(movie){return movie.title === title;});
  db.write(file, movies);
  res.redirect('/movies');
};

/*
 * GET /movies/new
 */

exports.new = function(req, res){
  res.render('movies/new', { title: 'Cinematic App | Add a Movie'});
}

/*
 * POST /movies
 */

exports.create = function(req, res){
  var title = req.body.title;
  var image = req.body.image;
  var color = req.body.color;
  var rated = req.body.rated;
  var studio = req.body.studio;
  var gross = req.body.gross;
  var numTheatres = req.body.numTheatres;

  var movies = db.read(file);
  var movie = {title: title, image: image, color: color, rated: rated, studio: studio, gross: gross, numTheatres: numTheatres};
  movies.push(movie);
  db.write(file, movies);

  res.redirect('/movies');
}