var React = require('react');
var {Link, IndexLink} = require('react-router');



var Nav = React.createClass({
	render: function(){
		return (
			<div>
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
					<li className="menu-text">React Timer</li>
						<li className="menu-item"><IndexLink activeClassName="activeLink" activeStyle={{fontWeight: 'bold'}} to="/">Timer</IndexLink></li>
						<li className="menu-item"><Link activeClassName="activeLink" activeStyle={{fontWeight: 'bold'}} to="/countdown">Countdown</Link></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<h4>Written by <a href="https://github.com/jussisaurio/">Jussi S.</a></h4>
				</div>
				
			</div>
			</div>
		);
	}
});

module.exports = Nav; 