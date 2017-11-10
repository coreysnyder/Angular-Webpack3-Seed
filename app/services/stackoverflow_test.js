'use strict';

var angular = require('angular').mock;
var serviceModule = require('./stackoverflow.js');
describe('the stack overflow service', function() {

  beforeEach(function() {

    angular.module(serviceModule);

    angular.inject(function(StackOverflow, $httpBackend){
      this.StackOverflow = StackOverflow;
      this.$httpBackend = $httpBackend; // Fake HTTP backend implementation
    });
  });

  describe('getInfo', function(){

    beforeEach(function(){
      // Setup HTTP Mocks
      this.mockGetInfoData = ['Toyota', 'Honda', 'Tesla'];
      this.getResponse = this.$httpBackend.when(
        'GET',
        'http://api.stackexchange.com/2.2/info?site=stackoverflow'
      ).respond(this.mockGetInfoData);
    });

    afterEach(function() {
      // Will throw errors if you don't clean up after yourself.
      this.$httpBackend.verifyNoOutstandingExpectation();
      this.$httpBackend.verifyNoOutstandingRequest();
    });

    it('makes an http get request to the right url', function(){
      this.StackOverflow.getInfo();
      this.$httpBackend.expectGET('http://api.stackexchange.com/2.2/info?site=stackoverflow');
      this.$httpBackend.flush();
    });

    it('returns the data', function(){
      var that = this;
      this.StackOverflow.getInfo().then(function(data){
        expect(data).toEqual(that.mockGetInfoData);
      });
      this.$httpBackend.flush();
    });

    describe('when an error occurs', function(){

      beforeEach(function(){
        this.errorMsg = 'test';
        this.getResponse.respond(500, this.errorMsg);
      });

      it('returns the error', function(){
        var that = this;
        this.StackOverflow.getInfo().then(function(){}, function(response){
          that.error = response;
          expect(response).toBe(that.errorMsg);
        });

        this.$httpBackend.flush();
      });

    });


  });
});
