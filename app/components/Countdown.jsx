var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({

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
					this.decrement();
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

	handleSetCountdown: function(seconds) {

		if (typeof seconds === 'number' && seconds>0) {

			this.setState({

				count: seconds,
				status: 'running'
			});

			
		}
	},

	decrement: function() {

		var that = this;
		
		this.timer = setInterval(()=>{

			var {count} = this.state;
			oneSecLess = count-1;
			that.setState({
				count: oneSecLess >= 0 ? oneSecLess : 0
			});

		}, 1000);

		
	},

	render: function() {

		var {count, status} = this.state;

		var renderFormOrControls = () => {
			if (status==='stopped') return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;	
			else return <Controls status={status} onStatusChange={this.handleStatusChange}/>;	
		};

		
		return (
			<div>
			<Clock totalSecs={count}/>
			{renderFormOrControls()}
			</div>
		);
	}
});

module.exports = Countdown;