'use strict';
var React = require('react');
var authorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var authorPage = React.createClass({
   getInitialState: function() {
    return {
      authors: []
    };
  },

  componentDidMount: function() {
    this.setState({
      authors: authorApi.getAllAuthors()
    });
  },

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = authorPage;