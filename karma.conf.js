module.exports = function(config) {
  config.set({

    autoWatch: false,

    browsers: [
      'PhantomJS'
    ],

    files: [
      'tests.webpack.js'
    ],

    frameworks: [
      'jasmine'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    reporters: [
      'progress'
    ],

    singleRun: true,

    failOnEmptyTestSuite: false,

    webpack: require('./webpack.config'),

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only'
    }

  });

};
