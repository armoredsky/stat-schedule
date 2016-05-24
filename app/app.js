'use strict';

// Declare app level module which depends on views, and components
angular.module('statScheduleApp', [
  'ngRoute',
  'statScheduleApp.calendar'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/calendar'});
}]);
