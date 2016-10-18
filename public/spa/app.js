(function() {
    'use strict';
    angular.module('app', ['ngRoute', 'ngSanitize']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
                templateUrl: '/spa/views/home/index.html',
                controller: 'homeController'
            })
            .when('/league/:leagueCode', {
                templateUrl: '/spa/views/league-results/index.html',
                controller: 'leagueResultsController'
            })
            .when('/teams/:teamID', {
                templateUrl: '/spa/views/team-detail/index.html',
                controller: 'teamDetailController'
            });

        $locationProvider.html5Mode(true);
    }]);

})();
