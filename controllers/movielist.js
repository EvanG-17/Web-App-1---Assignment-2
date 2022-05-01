'use strict';

const logger = require('../utils/logger');
const uuid = require('uuid');
const movielistStore = require('../models/movielist-store');

const movielist = {
  index(request, response) {
    const movielistId = request.params.id;
    logger.debug('Movielist id = ' + movielistId);
    const viewData = {
      movie: 'Movielist',
      movielist: movielistStore.getMovielist(movielistId),
    };
    logger.info('about to render', viewData.movielist);
    response.render('movielist', viewData);
  },
    deleteMovie(request, response) {
    const movielistId = request.params.id;
    const movieId = request.params.movieid;
    logger.debug(`Deleting Movie ${movieId} from Movielist ${movielistId}`);
    movielistStore.removeMovie(movielistId, movieId);
    response.redirect('/movielist/' + movielistId);
  },
    addMovie(request, response) {
    const movielistId = request.params.id;
    const movielist = movielistStore.getMovielist(movielistId);
    const newMovie = {
      id: uuid(),
      movie: request.body.movie,
      director: request.body.director,
      genre: request.body.genre,
      duration: request.body.duration
    };
    movielistStore.addMovie(movielistId, newMovie);
    response.redirect('/movielist/' + movielistId);
  },
};

module.exports = movielist;