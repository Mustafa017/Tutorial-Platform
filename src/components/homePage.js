'use strict';
var React = require('react');
var Link = require('react-router').Link;
var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <h1>Tutorial Platform</h1>
        <p>React, React-router and flux for ultra responsive web app</p>
        <Link to="about" className="btn btn-primary">Learn More</Link>
      </div>
    );
  }
});

module.exports = Home;