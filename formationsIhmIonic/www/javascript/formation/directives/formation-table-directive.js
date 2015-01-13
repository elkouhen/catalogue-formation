/*global angular */
(function () {
  'use strict';

  var formationSimpleTable = function (formationService) {
    return {
      restrict: 'A',
      scope: {
        formations: '='
      },
      templateUrl: 'partials/formations/directives/formation-table-directive.html',
      controller: ['$scope',
        function ($scope) {

          $scope.getStatus = function (formation) {

            if (formationService.getStatus(formation.id) === true) {
              return 'ion-ios-star';
            }

            return 'ion-ios-star-outline';
          };

          $scope.toggleStatus = function (formation) {

            formationService.toggleStatus(formation.id);
          };
      }]
    };
  };

  angular.module('formations').directive('formationTable', ['formationService', formationSimpleTable]);
}());