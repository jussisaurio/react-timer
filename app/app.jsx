var React = require('react');
var ReactDOM = require('react-dom');
// sama kun Route = require('react-router').Route, Router = ... .Router, jne... eli vaan uus lyhyempi syntaksi :)
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

// Load foundation.  style! = style loader tag, css! = css loader tag
// this requiring is made possible by webpack & its loader plugins (see package.json)
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(

	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('app')
);