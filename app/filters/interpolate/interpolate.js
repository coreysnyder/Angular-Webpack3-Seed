'use strict';

var angular = require('angular');
var versionModule = require('services/version/version');

module.exports = angular.module('aver.demoApp.interpolate', [versionModule])

.filter('interpolate', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
})

.name;
