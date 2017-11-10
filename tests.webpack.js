// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

require('angular');
require('angular-mocks/angular-mocks');

var context = require.context('./app', true, /_test\.js$/);
context.keys().forEach(context);
