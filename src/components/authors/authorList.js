'use strict';
var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');
var AuthorAction = require('../../actions/authorAction');

var authorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  
  deleteAuthor: function(id, event) {
    event.preventDefault();
    AuthorAction.deleteAuthor(id);
    toastr.success("Author Deleted!");
  },

  render: function() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href={"/author/" + author.id} onClick={this.deleteAuthor.bind(this, author.id)}>delete</a></td>
          <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table">
          <thead>
            <th>Action</th>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = authorList;