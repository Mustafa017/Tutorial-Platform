'use strict';
var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <h1>Tutorial Platform</h1>
        <p>React, React-router and flux for ultra responsive web app</p>
      </div>
    );
  }
});

module.exports = Home;