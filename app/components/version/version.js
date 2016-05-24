'use strict';

angular.module('statScheduleApp.version', [
  'statScheduleApp.version.interpolate-filter',
  'statScheduleApp.version.version-directive'
])

.value('version', '0.1');
