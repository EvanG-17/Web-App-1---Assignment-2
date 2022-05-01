'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const movielist = require('./controllers/movielist.js');

// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

router.get('/movielist/:id', movielist.index);

router.get('/movielist/:id/deleteMovie/:movieid', movielist.deleteMovie);
router.post('/movielist/:id/addmovie', movielist.addMovie);

router.get('/dashboard/deletemovielist/:id', dashboard.deleteMovielist);
router.post('/dashboard/addmovielist', dashboard.addMovielist);

// export router module
module.exports = router;

