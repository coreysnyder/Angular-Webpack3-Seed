'use strict';

var angular = require('angular');

module.exports = angular.module('aver.demoApp.filter', [])

.filter('testTemplateFilter', function () {
  return function (value) {
    return value.replace(/OH.../g, 'IO!');
  };
})

.name;
