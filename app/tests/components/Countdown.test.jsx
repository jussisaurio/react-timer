var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require ('Countdown');

describe ('Countdown', () =>{

	it ('should exist', () => {
		expect(Countdown).toExist();
	});

	describe ('handleSetCountdown', () => {
		it('should set state to running, and start counting down', (valmis) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.status).toBe('running');

			setTimeout(() =>{
				expect(countdown.state.count).toBe(9);
				valmis(); // mocha waits until this function is called (for asynchronous tests)
			}, 1001);

		});

		it('never takes the countdown below zero', (valmis) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(1);

			setTimeout(() =>{
				expect(countdown.state.count).toBe(0);
				valmis(); // mocha waits until this function is called (for asynchronous tests)
			}, 3000);

		});

		it('should not count down when paused', (valmis) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(5);
			countdown.handleStatusChange('paused');

			setTimeout(() =>{
				expect(countdown.state.count).toBe(5);
				expect(countdown.state.status).toBe('paused');
				valmis(); // mocha waits until this function is called (for asynchronous tests)
			}, 1001);

		});

		it('should reset timer and stop count when stopped', (valmis) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(5);
			countdown.handleStatusChange('stopped');

			setTimeout(() =>{
				expect(countdown.state.count).toBe(0);
				expect(countdown.state.status).toBe('stopped');
				valmis(); // mocha waits until this function is called (for asynchronous tests)
			}, 1001);

		});
	});
});