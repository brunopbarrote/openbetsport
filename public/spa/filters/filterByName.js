(function() {
    'use strict';
    angular.module('app').filter('filterByName', function() {
        return function(array, property, reverse) {
            var result = array.sort(function(object1, object2) {
                if (angular.isUndefined(property)) {
                    return object1.localeCompare(object2);
                }

                return object1[property].localeCompare(object2[property]);
            });
            return reverse ? result.reverse() : result;
        };
    });
})();
