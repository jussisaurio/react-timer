var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

	getInitialState: function () {

		return {count:0, status: 'stopped'};
	},

	handleStatusChange: function(newStatus){

		this.setState({

			status: newStatus
		});
	},

	// after props or state changes
	componentDidUpdate: function(prevProps, prevState) {

		if (this.state.status !== prevState.status) {

			switch (this.state.status) {

				case 'running':
					this.increment();
					break;
				case 'stopped': // if stopped, executes 'paused' case as well i.e. clears countdown.
					this.setState({count: 0});
				case 'paused': // just clears countdown
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}

		}
	},

	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},

	increment: function() {

		var that = this;
		
		this.timer = setInterval(()=>{

			var {count} = this.state;
			oneSecMore = count+1;
			that.setState({
				count: oneSecMore
			});

		}, 1000);

		
	},

	render: function() {

		var {count, status} = this.state;

		return (
			<div>
			<h1 className="page-title">Timer</h1>
			<Clock status={status} totalSecs={count}/>
			<Controls parent="timer" status={status} onStatusChange={this.handleStatusChange}/>;	
			</div>
		);
	}
});

module.exports = Timer;