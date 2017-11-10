'use strict';

var angular = require('angular').mock;
var moduleName = require('./interpolate');

describe('interpolate filter', function() {

  beforeEach(function() {
    angular.module(moduleName, function($provide) {
      $provide.value('version', 'TEST_VER');
    });

    angular.inject(function(interpolateFilter) {
      this.filter = interpolateFilter;
    });
  });

  it('should replace VERSION', function() {
    expect(this.filter('before %VERSION% after')).toEqual('before TEST_VER after');
  });

});
