'use strict';
var React = require('react');
var Link = require('react-router').Link;

var header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="app" className="navbar-brand">
            <img src="" alt="site logo"/>
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="app">Home</Link></li>
            <li><Link to="authors">Authors</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = header;