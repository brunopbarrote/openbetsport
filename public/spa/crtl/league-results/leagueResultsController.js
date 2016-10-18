(function() {
    'use strict';

    angular.module('app').controller('leagueResultsController', leagueResultsController);

    leagueResultsController.$inject = ['$scope', 'footballDataService', '$routeParams'];

    function leagueResultsController($scope, footballDataService, $routeParams) {
        $scope.getLeagueGames = getLeagueGames;
        $scope.games = {};

        function getLeagueGames() {
            var leagueCode = $routeParams.leagueCode;

            footballDataService.getByLeague(leagueCode).then(function(json) {
                $scope.games = json.fixtures;
                console.log(json);
            });
        }
        $scope.getLeagueGames();
    }
})();
