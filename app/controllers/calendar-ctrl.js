function calendarCtrl($scope, $location) {
  $scope.scopeTest = "Fat Chance!";
}

calendarCtrl.$inject = ['$scope', '$location'];
angular.module('statScheduleApp').controller('calendarCtrl', calendarCtrl);
