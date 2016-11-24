var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {

	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		files: ['app/tests/**/*.test.jsx'], // any file ending in .test.js in app/tests or any subfolder in app/tests
		preprocessors: {
			'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				timeout: '5000' // test fails after 5 seconds
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
};