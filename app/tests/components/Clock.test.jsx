var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');


describe ('Clock', () =>{

	it ('should exist', () => {

		expect(Clock).toExist();
	});

	describe('render', () => {
		it ('should render correct clock string into DOM', () => {
			var clock = TestUtils.renderIntoDocument(<Clock totalSecs={62}/>);
			var $element = $(ReactDOM.findDOMNode(clock));

			var actual = $element.find('.clock-text').text();

			var expected = "01:02";
			expect(actual).toBe(expected);

		});
	});
	

	describe ('formatSeconds', () => {

		it ('should format seconds', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>); // need to render to access component functions
			expect(clock.formatSeconds(650)).toBe("10:50");
		});

		it ('should format seconds when minutes or seconds <10', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			expect(clock.formatSeconds(61)).toBe("01:01");
		});

	});
});

