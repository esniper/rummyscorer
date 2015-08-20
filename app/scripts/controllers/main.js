'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location) {
    // Options for number of players
    $scope.n = [2,3,4,5,6];

    // Default number of players
    $scope.selectedNumberOfPlayers = 2;

    // Call when the number of players is changed
    $scope.onSelectNumberOfPlayers = function () {
      var players = [];
      for(var i=0; i<$scope.selectedNumberOfPlayers; i++) {
        players.push({'id': i+1});
      }
      $scope.players = players;
    };

    // Let's Play!
    $scope.play = function () {
      $rootScope.players = $scope.players;
      $location.path('/game');
    };
  });
