'use strict';

angular.module('statScheduleApp.calendar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/calendar', {
    templateUrl: 'views/calendar.html',
    controller: 'calendarCtrl'
  });
}])
