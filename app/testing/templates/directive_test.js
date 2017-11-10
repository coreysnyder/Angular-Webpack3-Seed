'use strict';

var angular = require('angular').mock;
var moduleName = require('./directive');

describe('the test directive', function() {

  beforeEach(function () {
    // Define mock services that you will inject into your directive controller
    this.isTasty = jasmine.createSpy('isTasty');
    this.isTasty.and.callFake(function(flavor) {
      return flavor == 'vanilla';
    });

    // Load the module that contains the code under test, and
    // configure it to provide your mock services instead of the real ones.
    // NOTE: using `that` is REQUIRED because the function that is passed to
    // `module` is executed with the module as context
    var that = this;
    angular.module(moduleName, function ($provide) {
      $provide.constant('isTasty', that.isTasty);
    });

    // Use `inject` to get your hands on Angular services that you'll need
    angular.inject(function($compile, $rootScope) {
      // Use $rootScope to manually create a scope object for your controller
      this.scope = $rootScope.$new();

      // Use $compile service to compile your directive
      this.$compile = $compile;
    });
  });

  it('creates a list element for every thing', function() {
    this.element = this.$compile(
      '<test-template-directive things="[1, 2]"></test-template-directive>'
    )(this.scope);


    // Digest required to generate new DOM elements based on the value of `things`
    this.scope.$digest();

    expect(this.element.find('li').length).toBe(2);
  });

  describe('when passed a tasty flavor', function() {

    beforeEach(function() {
      this.element = this.$compile(
        '<test-template-directive ice-cream-flavor="\'vanilla\'"></test-template-directive>'
      )(this.scope);
    });

    it('sets it on the scope', function() {
      // Use `isolateScope` because our directive uses an isolate scope
      var scope = this.element.isolateScope();
      expect(scope.tasty).toBe(true);
    });

    it('adds a class', function () {
      expect(this.element.hasClass('tasty-class')).toBe(true);
    });

  });

  describe('when passed a non-tasty flavor', function() {

    beforeEach(function() {
      this.element = this.$compile(
        '<test-template-directive ice-cream-flavor="\'beet\'"></test-template-directive>'
      )(this.scope);
    });

    it('sets it on the scope', function() {
      // Use `isolateScope` because our directive uses an isolate scope
      var scope = this.element.isolateScope();
      expect(scope.tasty).toBe(false);
    });

    it('does not add a class', function () {
      expect(this.element.hasClass('tasty-class')).toBe(false);
    });

  });

});
