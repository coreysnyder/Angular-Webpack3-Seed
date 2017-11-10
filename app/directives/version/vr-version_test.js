'use strict';

var angular = require('angular').mock;
var moduleName = require('./vr-version');

describe('The version directive', function() {

  beforeEach(function() {
    angular.module(moduleName, function($provide) {
      $provide.value('version', 'TEST_VER');
    });

    angular.inject(function($compile, $rootScope) {
      this.$compile = $compile;
      this.$rootScope = $rootScope;
    });
  });

  it('prints the current version', function() {
    var scope = this.$rootScope.$new();
    var element = this.$compile('<span vr-version></span>')(scope);

    expect(element.text()).toEqual('TEST_VER');
  });

});
