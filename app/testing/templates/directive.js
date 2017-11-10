'use strict';

var angular = require('angular');

module.exports = angular.module('aver.demoApp.directive', [])

.directive('testTemplateDirective', function() {

  return {

    scope: {
      things: '=',
      iceCreamFlavor: '='
    },

    controller: ['$scope', 'isTasty', function($scope, isTasty) {
      $scope.tasty = isTasty($scope.iceCreamFlavor);
    }],

    link: function(scope, element) {
      if (scope.tasty) {
        element.addClass('tasty-class');
      }
    },

    template: '<ul><li ng-repeat="thing in things"></li></ul>'
  };

})

.name;
