'use strict';
var React = require('react');
var authorApi = require('../../api/authorApi');

var authors = React.createClass({
  componentWillMount: function() {
    this.setState({
      authors: authorApi.getAllAuthors()
    })
  },

  getInitialState: function() {
    return {
      authors: []
    }
  },

  render: function() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href={"/authors/"+ author.id}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    }
    return (
      <div>
        <h1>Authors</h1>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.state.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = authors;