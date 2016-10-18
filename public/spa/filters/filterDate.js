(function() {
    'use strict';
    angular.module('app').filter('filterDate', function($filter) {
        return function(item) {
          var date = new Date(item);
          console.log(date);
            return $filter('date')(date,'dd/MM/yyyy HH:mm');
        };
    });
})();
