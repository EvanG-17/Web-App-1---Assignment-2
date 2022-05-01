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
      title: 'movielist App Dashboard',
      movielists: movielistStore.getAllmovielists(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.movielists);
    response.render('dashboard', viewData);
  },
  
  deletemovielist(request, response) {
    const movielistId = request.params.id;
    logger.debug(`Deleting movielist ${movielistId}`);
    movielistStore.removemovielist(movielistId);
    response.redirect('/dashboard');
  },
  
  addmovielist(request, response) {
    const newmovielist = {
      id: uuid(),
      title: request.body.title,
      duration: request.body.duration,
      movies: [],
    };
    movielistStore.addmovielist(newmovielist);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;