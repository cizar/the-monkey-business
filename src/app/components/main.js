var React = require('react/addons');
var Router = require('react-router');
var mui = require('material-ui');
var ui = require('./ui');

module.exports = React.createClass({
  onMenuIconButtonTouchTap: function() {
    this.refs.mainNav.toggle();
  },
  render: function() {
    var title = "The Monkey Business";
    return (
      <mui.AppCanvas predefinedLayout={1}>
        <mui.AppBar className="mui-dark-theme" onMenuIconButtonTouchTap={this.onMenuIconButtonTouchTap} title={title}>
          <mui.IconButton tooltip="Sort" disabled={true}>
            <mui.FontIcon className="muidocs-icon-custom-sort"/>
          </mui.IconButton>
        </mui.AppBar>
        <ui.MainNav ref="mainNav"/>
        <Router.RouteHandler/>
      </mui.AppCanvas>
    );
  }
});
