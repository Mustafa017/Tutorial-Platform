'use strict';
var Dispatcher = require('../Dispatcher/dispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    //Hey Dispatcher, go tell all stores that an author has been created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  }
};

module.exports = AuthorActions;