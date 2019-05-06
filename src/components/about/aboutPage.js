'use strict';
var React = require('react');

var aboutPage = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if(!confirm('Do you want to read a page that\'s this boring')){
        transition.abort();
      }else{
        callback();
      }
    },
    willTransitionFrom: function(transition, component) {
      if(!confirm('Do you want to leave a page that\'s this exciting')){
        transition.abort();
      }
    }
  },
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <p>This app uses the following technologies
          <ul>
            <li>React</li>
            <li>React-router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = aboutPage;