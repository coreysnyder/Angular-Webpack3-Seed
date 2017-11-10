'use strict';

var angular = require('angular').mock;
var moduleName = require('./factory');

describe('the test factory', function() {

  beforeEach(function () {
    // Define some mock services that you will inject into your factory
    this.myService = jasmine.createSpyObj('my service', ['ingestThing']);
    this.window = {};

    // Load the module that contains the code under test, and
    // configure it to provide your mock services instead of the real ones.
    // NOTE: using `that` is REQUIRED because the function that is passed to
    // `module` is executed with the module as context
    var that = this;
    angular.module(moduleName, function ($provide) {
      $provide.constant('$window', that.window);
      $provide.constant('myService', that.myService);
    });

    // Use `inject` to get your hands on Angular services that you'll need,
    // including the service under test
    angular.inject(function($q, $rootScope, testTemplateFactory, $timeout) {
      this.q = $q;
      this.rootScope = $rootScope;
      this.$timeout = $timeout;
      this.testTemplateFactory = testTemplateFactory;
    });
  });

  describe('activate method', function() {

    beforeEach(function() {
      this.window.things = ['thing1', 'thing2'];
      this.testTemplateFactory.activate();
    });

    it('tells myService to ingest a particular thing', function() {
      expect(this.myService.ingestThing).toHaveBeenCalledWith(this.window.things[0]);

    });

    it('calls myService.ingestThing for every thing', function() {
      expect(this.myService.ingestThing.calls.count()).toBe(this.window.things.length);
    });

  });

  // This is an example for testing a method that returns a promise
  describe('deferredDouble method', function(){

    it('doubles the value that the input promise resolves to', function(done){

      this.num = 5;
      var that = this;

      // Call the method under test and chain the callback to the output
      this.testTemplateFactory.deferredDouble(this.num).then(function(data){
        expect(data).toEqual(that.num*2);
        done();
      });

      this.rootScope.$apply();

    });
  });

});
