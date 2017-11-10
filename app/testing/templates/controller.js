'use strict';

var angular = require('angular');

module.exports = angular.module('aver.demoApp.controller', []).controller('TestTemplateController',
  ['$scope', 'dataService',
    function($scope, dataService) {

      $scope.setCountry = function(country) {
        $scope.country = country;
      };

      $scope.data = dataService.get('stuff');

    }])
  .name;
