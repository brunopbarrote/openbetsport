(function () {
    'use strict';
    angular.module('app', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

      $routeProvider.when('/', {
            templateUrl : '/spa/views/home/index.html',
            controller  : 'homeController'
        });

        $locationProvider.html5Mode(true);
    }]);

})();
