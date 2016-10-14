(function () {
    'use strict';

    angular.module('app').controller('homeController', homeController);

    homeController.$inject = ['$scope'];

    function homeController($scope) {
      console.log('Olá da Home Controller');
    }
})();
