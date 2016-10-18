(function() {
    'use strict';
    angular.module('app').filter('filtroTeam', function() {
        return function(item, link) {
            var url = link.split('/').pop();
            return String.format('<a href="/teams/{0}">{1}</a>', url, item);
        };
    });
})();
