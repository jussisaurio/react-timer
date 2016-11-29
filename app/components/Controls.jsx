var React = require('react');


var Controls = React.createClass({

	propTypes: {
		status: React.PropTypes.string.isRequired
	},

	render: function(){
		
		var {status} = this.props;

		var renderStartStopButton = () => {

			if (status==='paused') return <button className="button primary">Start</button>;
			else if (status==='running') return <button className="button secondary">Pause</button>;
		};	

		return (
			<div className="controls">
				{renderStartStopButton()}
				<button className="button alert">Clear</button>
			</div>
		);
	}
});

module.exports = Controls;