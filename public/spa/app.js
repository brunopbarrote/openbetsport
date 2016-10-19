(function() {
    'use strict';
    angular.module('app', ['ngRoute', 'ngSanitize', 'angular.filter', 'angular-linq']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
                templateUrl: '/spa/views/home/index.html',
                controller: 'homeController'
            })
            .when('/league/matches/:leagueCode', {
                templateUrl: '/spa/views/league-results/index.html',
                controller: 'leagueResultsController'
            })
            .when('/teams/:teamID', {
                templateUrl: '/spa/views/team-detail/index.html',
                controller: 'teamDetailController'
            });

        $locationProvider.html5Mode(true);
    }]);

    angular.module('app').run(function($rootScope, mongoService) {
        $rootScope.menuItem = {};

        mongoService.getMenu().then(function(json) {
            console.log(json);
            $rootScope.menuItem = json;
        });
    });
})();
