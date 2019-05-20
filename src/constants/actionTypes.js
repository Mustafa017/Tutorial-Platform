'use strict';
var keyMirror = require('react/lib/keyMirror');

var actionTypes = keyMirror({
  INITIALIZE: null,
  CREATE_AUTHOR: null,
  UPDATE_AUTHOR: null,
  DELETE_AUTHOR: null
});

module.exports = actionTypes;