var React = require('react');
var Router = require('react-router');
// var injectTapEventPlugin = require("react-tap-event-plugin");
var Routes = require('./routes');

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
// injectTapEventPlugin();

// Render the app!
Router.run(Routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
