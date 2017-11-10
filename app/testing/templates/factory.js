'use strict';

var angular = require('angular');

module.exports = angular.module('aver.demoApp.factory', []).service('testTemplateFactory',

  function($window, myService, $q) {

    return {

      activate: function() {
        $window.things.forEach(function(thing) {
          myService.ingestThing(thing);
        });
      },

      // A method that takes a number and returns a promise that resolves to the result
      deferredDouble: function(numberToDouble) {
        var deferred = $q.defer(); // Setup Deferred & promise
        deferred.resolve(numberToDouble*2); // Immediately resolve the promise
        return deferred.promise; // Return the promise.
      }
    };

  })
  .name;
