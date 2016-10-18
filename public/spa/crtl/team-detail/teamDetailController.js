(function() {
    'use strict';

    angular.module('app').controller('teamDetailController', teamDetailController);

    teamDetailController.$inject = ['$scope', 'footballDataService', '$routeParams'];

    function teamDetailController($scope, footballDataService, $routeParams) {
        $scope.teamID = $routeParams.teamID;
        $scope.getTeamDetail = getTeamDetail;
        $scope.getPlayersTeam  = getPlayersTeam;
        $scope.data = {};
        $scope.players = {};

        function getTeamDetail() {

            footballDataService.getTeamById($scope.teamID ).then(function(json) {
                $scope.data = json;
                console.log(json);
            });
        }

        function getPlayersTeam() {
            footballDataService.getTeamPlayersById($scope.teamID).then(function(json) {
                $scope.players = json.players;
                console.log(json);
            });
        }
        $scope.getPlayersTeam();
        $scope.getTeamDetail();
    }
})();
