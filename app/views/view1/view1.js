'use strict';

var angular = require('angular');
var angularUIRouter = require('@uirouter/angularjs').default;
var templateUrl = require('./view1.html');

module.exports = angular.module('aver.corey-app.view1', [angularUIRouter])

.config(function($stateProvider) {

  var view1State = {
    name: 'view1',
    url: '/view1/',
    controller: 'View1Ctrl',
    controllerAs: 'View1Ctrl',
    templateUrl: templateUrl
  };
  $stateProvider.state(view1State);

})

.controller('View1Ctrl', function() {
  console.log("View 1 Ctrl");
  var vm = this;

  vm.doThing = function(){
    console.log("Button Clicked! Can you set a breakpoint here?");
  };
})

.name;
