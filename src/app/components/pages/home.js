var React = require('react');
var ui = require('../ui');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="mui-app-content-canvas">
        <h2>Home</h2>
        <ui.MoneyTracker/>
      </div>
    );
  }
});
