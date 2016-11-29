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
		
		var {status, parent} = this.props;

		var renderStartStopButton = () => {

			if (parent==='countdown') {
				if (status==='paused') return <button onClick={this.onStatusChange('running')} className="button primary">Start</button>;
			}
			else if (parent==='timer') {
				if (status==='paused' || status==='stopped') return <button onClick={this.onStatusChange('running')} className="button primary">Start</button>;
			}

			if (status==='running') return <button onClick={this.onStatusChange ('paused')} className="button secondary">Pause</button>;
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