(function() {
    'use strict';
    angular.module('app').filter('filtroGameStats', function() {
        return function(item) {
            var retorno = '';
            if (item == 'SCHEDULED' || item == 'TIMED') {
                retorno = 'EM BREVE';
            } else if (item == 'IN_PLAY') {
                retorno = "<p class='c-black f-500'>EM ANDAMENTO<b>";
            } else if (item == 'FINISHED') {
                retorno = "<p class='c-black f-500'>ENCERRADA<b>";
            }
            else{
              retorno = item;
            }
            return retorno;
        };
    });
})();
