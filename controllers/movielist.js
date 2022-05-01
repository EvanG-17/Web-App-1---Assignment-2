'use strict';

const logger = require('../utils/logger');
const uuid = require('uuid');
const movielistStore = require('../models/movielist-store');

const movielist = {
  index(request, response) {
    const movielistId = request.params.id;
    logger.debug('movielist id = ' + movielistId);
    const viewData = {
      movie: 'movielist',
      movielist: movielistStore.getmovielist(movielistId),
    };
    logger.info('about to render', viewData.movielist);
    response.render('movielist', viewData);
  },
    deleteMovie(request, response) {
    const movielistId = request.params.id;
    const movieId = request.params.movieid;
    logger.debug(`Deleting Movie ${movieId} from movielist ${movielistId}`);
    movielistStore.removeMovie(movielistId, movieId);
    response.redirect('/movielist/' + movielistId);
  },
    addMovie(request, response) {
    const movielistId = request.params.id;
    const movielist = movielistStore.getmovielist(movielistId);
    const newMovie = {
      id: uuid(),
      Movie: request.body.Movie,
      director: request.body.Director,
      genre: request.body.genre,
      duration: request.body.duration
    };
    movielistStore.addMovie(movielistId, newMovie);
    response.redirect('/movielist/' + movielistId);
  },
};

module.exports = movielist;