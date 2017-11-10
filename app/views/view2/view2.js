'use strict';

var angular = require('angular');
var interpolateModule = require('filters/interpolate/interpolate');
var templateUrl = require('./view2.html');
var stackoverflow = require('services/stackoverflow');
var versionModule = require('directives/version/vr-version');

require('./view2.less');

module.exports = angular.module(
  'aver.corey-app.view1.view2',
  [interpolateModule, stackoverflow, versionModule]
)
.config(function($stateProvider) {

  var view2State = {
    name: 'view2',
    url: '/view2',
    controller: 'View2Ctrl',
    controllerAs: 'View2Ctrl',
    templateUrl: templateUrl
  };
  $stateProvider.state(view2State);

})
.controller('View2Ctrl', function($scope, StackOverflow) {

  var vm = this;
  vm.title = 'View 2 Title';

  StackOverflow.getInfo()
  .then(function (data) {
    vm.siteInfo = data;
  }, function (error) {
    vm.stackOverflowError = error;
  });

})
.name;
