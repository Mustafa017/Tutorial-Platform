'use strict';
var React = require('react');
var Link = require('react-router').Link;

var notFound = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Whoops! Sorry, nothing to see here</p>
        <Link to="app" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }
});

module.exports = notFound;