'use strict';
var React = require('react');

var authorForm = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Manage Author</h1>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text"
                className="form-control"
                name="firstName"
                ref="firstName"
                placeholder="First Name"
                onChange={this.props.onChange}
                value={this.props.author.firstName} />
          <br/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text"
                className="form-control"
                name="lastName"
                ref="lastName"
                placeholder="Last Name"
                onChange={this.props.onchange}
                value={this.props.author.lastName} />
          <br/>
          
          <input type="submit" value="Save" className="btn btn-default"/>
        </form>
      </div>
    );
  }
});

module.exports = authorForm;