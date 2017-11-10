'use strict';

var angular = require('angular').mock;
var moduleName = require('./filter');

describe('the test filter', function() {

  beforeEach(function () {

    // Load the module that contains the code under test
    angular.module(moduleName);

    // Use `inject` to get your hands on Angular services that you'll need
    angular.inject(function($filter) {
      // Use $filter service to grab a reference to your filter function
      this.filter = $filter('testTemplateFilter');
    });

  });

  it('works', function() {
    expect(this.filter('OH...')).toEqual('IO!');
  });

});
