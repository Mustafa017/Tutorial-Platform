'use strict';
var Dispatcher = require('../Dispatcher/dispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var initializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initializeData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

module.exports = initializeActions;