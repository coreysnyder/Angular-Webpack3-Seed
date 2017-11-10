'use strict';

var angular = require('angular');
var templateUrl = require('./view1.html');
var scaffoldingModule = require('@aver/ui-scaffolding');

module.exports = angular.module('aver.corey-app.view1', [scaffoldingModule])

.config(function($stateProvider) {

  var view1State = {
    name: 'view1',
    url: '/view1',
    controller: 'View1Ctrl',
    controllerAs: 'View1Ctrl',
    templateUrl: templateUrl
  };
  $stateProvider.state(view1State);

})

.controller('View1Ctrl', function() {

})

.name;
