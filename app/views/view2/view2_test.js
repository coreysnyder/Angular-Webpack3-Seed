'use strict';

var angular = require('angular').mock;
var moduleName = require('./view2.js');

describe('View2 controller', function() {
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
    ctrl = $controller('View2Ctrl', {
      $scope: scope
    });
  });

  it('has the right title', function() {
    expect(ctrl.title).toEqual('View 2 Title');
  });

});
