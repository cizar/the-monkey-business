var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');

var menuItems = [
  { route: 'home', text: 'Home'},
  { route: 'about', text: 'About '},
  { route: 'login', text: 'Login '}
];

module.exports = React.createClass({
  mixins: [Router.Navigation],
  toggle: function() {
    this.refs.leftNav.toggle();
  },
  onLeftNavChange: function(event, key, payload) {
    this.transitionTo(payload.route);
  },
  onHeaderClick: function(event) {
    this.transitionTo(menuItems[0].route);
    this.refs.leftNav.close();
  },
  render: function() {
    var header = <div className="header" onClick={this.onHeaderClick}>Menú</div>;
    return (
      <mui.LeftNav ref="leftNav"
        header={header}
        docked={false}
        isInitiallyOpen={false}
        menuItems={menuItems}
        onChange={this.onLeftNavChange} />
    );
  }
});
