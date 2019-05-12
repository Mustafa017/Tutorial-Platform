'use strict';
var Dispatcher = require('../Dispatcher/dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';
var _authors = [];

var authorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  getAllAuthors: function() {
    return _authors;
  },
  getAuthorById: function(id) {
    return _.find(_authors, {id: id});
  }
});

Dispatcher.register(function(action) {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initializeData.authors;
      authorStore.emitChange();
      break;

    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      authorStore.emitChange();
      break;
  
    default:
      break;
  }
});

module.exports = authorStore;