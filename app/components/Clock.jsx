var React = require('react');

var Clock = React.createClass({
	
	getDefaultProps: function() {

		return {
			totalSecs: 0
		};
	},

	propTypes: {

		totalSecs: React.PropTypes.number
	},

	formatSeconds: function(totalSecs) {
		var hours = Math.floor(totalSecs/3600);
		var mins = Math.floor(totalSecs/60) % 60;
		var secs = totalSecs % 60;

		if (mins<10) {
			mins = "0" + mins;
		}
		if (secs<10) {
			secs = "0" + secs;
		}

		if (hours>0) return hours+":"+mins+":"+secs;
		else return mins + ":" + secs;
	},

	render: function() {

		var {totalSecs} = this.props;
		return (
			<div className="clock"><span className="clock-text">{this.formatSeconds(this.props.totalSecs)}</span></div>
		);
	}
});

module.exports = Clock;