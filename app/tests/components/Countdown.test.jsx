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
	});
});