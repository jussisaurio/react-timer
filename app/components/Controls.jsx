var React = require('react');


var Controls = React.createClass({

	propTypes: {
		status: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	},

	componentWillReceiveProps(nextProps) {
	},

	onStatusChange: function(newStatus) {

		return () => {
			this.props.onStatusChange(newStatus);
		}
	},

	render: function(){
		
		var {status} = this.props;

		var renderStartStopButton = () => {

			if (status==='paused') return <button onClick={this.onStatusChange('running')} className="button primary">Start</button>;
			else if (status==='running') return <button onClick={this.onStatusChange ('paused')} className="button secondary">Pause</button>;
		};	

		return (
			<div className="controls">
				{renderStartStopButton()}
				<button onClick={this.onStatusChange('stopped')} className="button alert">Clear</button>
			</div>
		);
	}
});

module.exports = Controls;