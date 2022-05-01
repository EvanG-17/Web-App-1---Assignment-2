'use strict';

// import all required modules
const logger = require('../utils/logger');
const uuid = require('uuid');

const movielistStore = require('../models/movielist-store.js');

// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('dashboard rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Movielist App Dashboard',
      movielists: movielistStore.getAllMovielists(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.movielists);
    response.render('dashboard', viewData);
  },
  
  deleteMovielist(request, response) {
    const movielistId = request.params.id;
    logger.debug(`Deleting Movielist ${movielistId}`);
    movielistStore.removeMovielist(movielistId);
    response.redirect('/dashboard');
  },
  
  addMovielist(request, response) {
    const newMovielist = {
      id: uuid(),
      title: request.body.title,
      duration: request.body.duration,
      movies: [],
    };
    movielistStore.addMovielist(newMovielist);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;