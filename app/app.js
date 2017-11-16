'use strict';


var angular = require('angular');
var viewsModule = require('./views/index.views');
var uiRouterConfiguration = require('./configuration/configuration');


// Declare app level module which depends on views, and components
angular.module('aver.corey-app', [
  viewsModule,
  uiRouterConfiguration,
  'ui.router'
])

.config(function($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode({
    enabled: true
  });

  $urlRouterProvider.otherwise('/view1/');
})
.run(function($rootScope){
  $rootScope.appNavLinks = [
    {
      displayName: 'Test Link',
      sref: 'test'
    }
  ];
});

