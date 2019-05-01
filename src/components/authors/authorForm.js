'use strict';
var React = require('react');
var TextInput = require('../common/textInput');

var authorForm = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onError: React.PropTypes.object
  },

  render: function() {
    return (
      <div>
        <h1>Manage Author</h1>
        <form>
          <TextInput 
            name="firstName" 
            label="First Name" 
            onChange={this.props.onChange}
            value={this.props.author.firstName}
            error={this.props.onError.firstName} />

          <TextInput 
            name="lastName" 
            label="Last Name" 
            onChange={this.props.onChange}
            value={this.props.author.lastName} 
            error={this.props.onError.lastName} />

          <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
        </form>
      </div>
    );
  }
});

module.exports = authorForm;