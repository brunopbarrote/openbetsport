(function() {
    'use strict';
    angular.module('app').filter('filtroGameStats', function() {
        return function(item) {
            if (item == 'SCHEDULED' || item == 'TIMED') {
                return 'EM BREVE';
            } else if (item == 'IN_PLAY') {
                return "<p class='c-black f-500'>EM ANDAMENTO<b>";
            }
            return item;
        };
    });
})();
