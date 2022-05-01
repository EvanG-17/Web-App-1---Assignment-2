'use strict';

const_= require('lodash');
const JsonStore = require('./json-store');
const logger = require('../utils/logger');

const CommentStore = {
  store: new JsonStore('./models/comment-store.json'), { commentCollection: [] }),
    collection: 'commentCollection',
      
      getAllComments() {
      return this.store.findAll(this.collection);
    },
      
      getCommend(id) {
        return this.store.findOneBy
      }
}