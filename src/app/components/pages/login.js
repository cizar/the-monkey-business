var React = require('react');
var mui = require('material-ui');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="mui-app-content-canvas">
        <h2>Login</h2>
        <mui.TextField type="text" floatingLabelText="Username" />
        <mui.TextField type="password" floatingLabelText="Password" />
        <mui.RaisedButton label="Login" primary={true} />
        <mui.RaisedButton label="Create account" />
      </div>
    );
  }
});
