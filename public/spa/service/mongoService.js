(function() {
    'use strict';
    angular.module('app').service('mongoService', function($http, $q) {
        var service = {
            getMenu: getMenu
        };

        function getMenu() {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: '/api/leagues'
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function(msg) {
                deferred.reject(msg);
                console.log(msg);
            });

            return deferred.promise;
        }
        return service;
    });


})();
