'use strict';

var angular = require('angular');

module.exports = angular.module('aver.demoApp.vr-version', [])

.directive('vrVersion', function(version) {
  return function(scope, elm) {
    elm.text(version);
  };
})

.name;
