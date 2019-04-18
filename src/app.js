$ = jQuery = require("jquery");
var React = require('react');
var Home = require('./components/homePage');
var AboutPage = require('./components/about/aboutPage');

(function (win) {
  'use strict';
  var App = React.createClass({
    render: function() {
      var Child;
      switch (this.props.route) {
        case 'about':
          Child = AboutPage;
          break;
        default:
          Child = Home;
          break;
      }
      return (
        <div>
          <Child/>
        </div>
      );
    }
  });
  function render(){
    var route = win.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
  }
  window.addEventListener('hashchange', render);
  render();
})(window);
