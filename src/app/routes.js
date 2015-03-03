var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var components = require('./components');
var pages = components.pages;

module.exports = (
  <Route handler={components.Main}>
    <DefaultRoute name="home" handler={pages.HomePage} />
    <Route name="about" handler={pages.AboutPage} />
    <Route name="login" handler={pages.LoginPage} />
    <NotFoundRoute handler={pages.NotFoundPage}/>
  </Route>
);
