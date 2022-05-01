'use strict';

const logger = require('../utils/logger');
const uuid = require('uuid');
const movielistStore = require('../models/movielist-store');

const movielist = {
  index(request, response) {
    const movielistId = request.params.id;
    logger.debug('movielist id = ' + movielistId);
    const viewData = {
      title: 'movielist',
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
      title: request.body.title,
      artist: request.body.artist,
      genre: request.body.genre,
      duration: request.body.duration
    };
    movielistStore.addSong(movielistId, newSong);
    response.redirect('/movielist/' + movielistId);
  },
};

module.exports = movielist;