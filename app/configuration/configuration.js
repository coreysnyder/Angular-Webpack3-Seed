var angular = require('angular');
var angularUIRouter = require('@uirouter/angularjs').default;


module.exports = angular.module('aver.ui-scaffolding.ui-router-configuration', [angularUIRouter])
.run(function() {
  console.log('here');
}).name;
