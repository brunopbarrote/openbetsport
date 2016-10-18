(function() {
    'use strict';

    angular.module('app').controller('leagueResultsController', leagueResultsController);

    leagueResultsController.$inject = ['$scope', 'footballDataService', '$routeParams', '$interval'];

    function leagueResultsController($scope, footballDataService, $routeParams, $interval) {
        $scope.getLeagueGames = getLeagueGames;
        $scope.games = {};
        $scope.loadPage = loadPage;
        $scope.lastUpdated = '';

        function getLeagueGames() {
            var leagueCode = $routeParams.leagueCode;
            footballDataService.getByLeague(leagueCode).then(function(json) {
                $scope.games = json.fixtures;
                console.log(json);
                //notify('top', 'right', '', 'inverse', 'animated fadeIn', 'animated fadeOut', 'Welcome back ', 'Mallinda Hollaway!');
            });
        }

        function loadPage() {
            $scope.getLeagueGames();
            $scope.lastUpdated = 'Updated: ' + new Date();
            // poll every 30 seconds.
            $interval(function() {
                $scope.lastUpdated = 'Updated: ' + new Date();
                $scope.getLeagueGames();
            }, 15000);
        }
        $scope.loadPage();
    }
})();
