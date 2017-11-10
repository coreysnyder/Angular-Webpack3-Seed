'use strict';

var angular = require('angular').mock;
var moduleName = require('./view1.js');

describe('View1 controller', function() {
  var $controller;
  var $rootScope;
  var ctrl;
  beforeEach(function(){
    angular.module(moduleName);
    angular.inject(function(_$controller_, _$rootScope_){
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    });

    var scope = $rootScope.$new();
    ctrl = $controller('View1Ctrl', {
      $scope: scope
    });
  });

  it('was successfully created', function() {
    expect(ctrl).toBeDefined();
  });

});
