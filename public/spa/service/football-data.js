(function() {
    'use strict';
    angular.module('app').service('footballDataService', function($http, $q) {
        var service = {
            getByLeague: getByLeague,
            getTeamById: getTeamById,
            getTeamPlayersById: getTeamPlayersById,
            getTeamMatchesById: getTeamMatchesById
        };

        function getTeamMatchesById(teamID) {
          var deferred = $q.defer();

          $http({
              method: 'GET',
              url: 'http://api.football-data.org/v1/teams/' + teamID + '/fixtures',
              headers: {
                  'X-Auth-Token': '88b3c85d720d49019f4fb8acbcd0b2aa'
              }
          }).success(function(data) {
              deferred.resolve(data);
          }).error(function(msg) {
              deferred.reject(msg);
              console.log(msg);
          });

          return deferred.promise;
        }

        function getTeamPlayersById(teamID) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'http://api.football-data.org/v1/teams/' + teamID + '/players',
                headers: {
                    'X-Auth-Token': '88b3c85d720d49019f4fb8acbcd0b2aa'
                }
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function(msg) {
                deferred.reject(msg);
                console.log(msg);
            });

            return deferred.promise;
        }

        function getTeamById(teamID) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'http://api.football-data.org/v1/teams/' + teamID,
                headers: {
                    'X-Auth-Token': '88b3c85d720d49019f4fb8acbcd0b2aa'
                }
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function(msg) {
                deferred.reject(msg);
                console.log(msg);
            });

            return deferred.promise;
        }

        function getByLeague(leagueCode) {
            var deferred = $q.defer();

            var params = {
                league: leagueCode,
                timeFrame: 'n7'
            };

            $http({
                method: 'GET',
                url: 'http://api.football-data.org/v1/fixtures',
                headers: {
                    'X-Auth-Token': '88b3c85d720d49019f4fb8acbcd0b2aa'
                },
               params: params
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
