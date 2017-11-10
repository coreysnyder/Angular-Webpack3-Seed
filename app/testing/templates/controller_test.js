'use strict';

var angular = require('angular').mock;
var controllerApp = require('./controller');

describe('the test controller', function() {

  beforeEach(function() {
    // Define some mock services that you will inject into your controller
    this.mockServiceData = {a: 1};
    this.dataService = jasmine.createSpyObj('dataService', ['get']);
    this.dataService.get.and.returnValue(this.mockServiceData);

    // Load the module that contains the code under test
    angular.module(controllerApp);

    // Use `inject` to get your hands on Angular services that you'll need
    angular.inject(function($controller, $rootScope) {
      // Use $rootScope to manually create a scope object for your controller
      this.scope = $rootScope.$new();


      // Use $controller service to instantiate your controller,
      // passing in the mocks defined earlier.
      // (make sure to use the right controller name!)
      this.ctrl = $controller('TestTemplateController', {
        $scope: this.scope,
        dataService: this.dataService
      });
    });

  });

  describe('on load', function() {

    it('makes an dataService.get call', function() {
      expect(this.dataService.get).toHaveBeenCalledWith(
        'stuff'
      );
    });

    describe('after receiving a response', function() {

      it('sets the data on the scope', function() {
        expect(this.scope.data).toBe(this.mockServiceData);
      });

    });

  });

  describe('setCountry method', function() {

    beforeEach(function() {
      this.country = 'Luxembourg';
    });

    it('sets the country on the scope', function() {
      this.scope.setCountry(this.country);

      expect(this.scope.country).toEqual(this.country);
    });

  });

});
