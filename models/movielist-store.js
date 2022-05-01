'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const movielistStore = {

  store: new JsonStore('./models/movielist-store.json', { movielistCollection: [] }),
  collection: 'movielistCollection',

  getAllMovielists() {
    return this.store.findAll(this.collection);
  },

  getMovielist(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addMovielist(movielist) {
    this.store.add(this.collection, movielist);
  },

  removeMovielist(id) {
    const movielist = this.getMovielist(id);
    this.store.remove(this.collection, movielist);
  },

  removeAllMovielists() {
    this.store.removeAll(this.collection);
  },

  addMovie(id, movie) {
    const movielist = this.getMovielist(id);
    movielist.movies.push(movie);
  },

  removeMovie(id, movieId) {
    const movielist = this.getMovielist(id);
    const movie = movielist.movies;
    _.remove(movies, { id: movieId});
  },
};

module.exports = movielistStore;