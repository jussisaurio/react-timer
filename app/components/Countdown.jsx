var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({

	getInitialState: function () {

		return {count:0, status: 'stopped'};
	},

	// after props or state changes
	componentDidUpdate: function(prevProps, prevState) {

		if (this.state.status !== prevState.status) {

			switch (this.state.status) {

				case 'running':
					this.decrement();
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

		var {count} = this.state;
		return (
			<div>
			<Clock totalSecs={count}/>
			<CountdownForm onSetCountdown={this.handleSetCountdown}/>	
			</div>
		);
	}
});

module.exports = Countdown;