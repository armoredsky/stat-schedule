function calDay() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/cal-day.html',
    scope: {
      date: '@',
      earned: '@'
    },
    link: function(scope) {

    }
  };
}

calDay.$inject = [];
angular.directive('calDay', calDay);
