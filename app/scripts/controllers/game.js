'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp')
  .controller('GameCtrl', function ($rootScope, $scope) {
    var currentRoundNumber = 1;
    $scope.players = $rootScope.players;
    if (!$scope.players) {
      $scope.players = [
        {'id': 1, 'name': 'Arjun'},
        {'id': 2, 'name': 'Rashmi'}
      ];
    }
    $scope.rounds = [];
    $scope.currentRound = {'roundNumber': currentRoundNumber++};

    $scope.startNewRound = function() {
      // Make sure at least one person has a "0" score
      var numberOfZeroes = 0;
      $scope.players.forEach(function(player){
        if ($scope.currentRound[player['id']] == 0) {
          numberOfZeroes += 1;
        }
      });
      if (numberOfZeroes = 0) {
        alert('One person should have a 0 score.');
        return
      } else {
        if (numberOfZeroes > 1) {
          alert('More than one person has a 0 score.')
        }
      }

      $scope.rounds.push($scope.currentRound);
      $scope.currentRound = {'roundNumber': currentRoundNumber++};
      $scope.players.forEach(function(player){
        var totalScore = 0;
        $scope.rounds.forEach(function(round){
          totalScore += round[player['id']];
        });
        player['totalScore'] = totalScore;
      });
    }
  });
