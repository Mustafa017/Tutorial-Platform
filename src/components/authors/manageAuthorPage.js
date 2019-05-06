'use strict';
var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var manageAuthor = React.createClass({
  mixins: [ Router.Navigation ],

  statics: {
    willTransitionFrom: function(transition, component) {
      if(component.state.authorFormDirty && !confirm("Leave without saving?")){
        transition.abort();
      }
    }
  },

  getInitialState: function() {
    return {
      author: {
        id: '',
        firstName: "",
        lastName: ""
      },
      error: {},
      authorFormDirty: false
    };
  },
  
  componentWillMount: function() {
    var authorId = this.props.params.id;
    if(authorId){
      this.setState({ author: AuthorApi.getAuthorById(authorId) });
    }
  },

  setAuthorState: function(event) {
    this.setState({ authorFormDirty: true });
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({
      author: this.state.author
    });
  },

  authorFormValid: function() {
    var authorFormValid = true;
    this.state.error = {};

    if(this.state.author.firstName.length < 3){
      this.state.error.firstName = "First name must have atleast 3 characters";
      authorFormValid = false;
    }

    if(this.state.author.lastName.length < 3){
      this.state.error.lastName = "Last name must have atleast 3 characters";
      authorFormValid = false;
    }

    this.setState({error: this.state.error});
    return authorFormValid;
  },

  saveAuthor: function(event) {
    event.preventDefault();
    if(!this.authorFormValid()){
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    this.setState({ authorFormDirty: false });
    toastr.success('Author saved!');
    this.transitionTo('authors');
  },

  render: function() {
    return (
      <AuthorForm 
        author={this.state.author} 
        onChange={this.setAuthorState}
        onError={this.state.error} 
        onSave={this.saveAuthor} />
    );
  }
});

module.exports = manageAuthor;