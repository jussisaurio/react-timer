var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require ('Controls');

describe('Controls', () => {

	it('should exist', () => {
		expect(Controls).toExist();
	});

	describe('render', () => {
		it('should render pause button when running', () => {
			var controls = TestUtils.renderIntoDocument(<Controls status="running"/>);

			$element = $(ReactDOM.findDOMNode(controls));

			var $button = $element.find('button:contains(Pause)');

			expect($button.length).toBe(1); // jquery found 1 button containing 'Pause'
		});

		it('should render start button when paused', () => {
			var controls = TestUtils.renderIntoDocument(<Controls status="paused"/>);

			$element = $(ReactDOM.findDOMNode(controls));

			var $button = $element.find('button:contains(Start)');

			expect($button.length).toBe(1); // jquery found 1 button containing 'Start'
		});
	});

});