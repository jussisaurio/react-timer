var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');
var Clock = require('Clock');


describe ('CountdownForm', () => {

	it ('should exist', () =>{

		expect(CountdownForm).toExist();
	});

	it ('should call onSetCountdown if valid number entered', () =>{
		var spy = expect.createSpy();
		var countform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		$element = $(ReactDOM.findDOMNode(countform));

		countform.refs.seconds.value = '666';
		TestUtils.Simulate.submit($element.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(666);
	});

	it ('should NOT call onSetCountdown if invalid number entered', () =>{
		var spy = expect.createSpy();
		var countform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		$element = $(ReactDOM.findDOMNode(countform));

		countform.refs.seconds.value = 'Shitfaggot';
		TestUtils.Simulate.submit($element.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});

});