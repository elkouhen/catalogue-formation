/*global angular */
(function () {

  'use strict';

  var formationSimpleTable = function (formationService) {
    return {
      restrict: 'A',
      scope: {
        formations: '='
      },
      templateUrl: '/formations/partials/formations/directives/formation-simple-table-directive.html',
      controller: ['$scope',
        function ($scope) {

          $scope.getStatus = function (formation) {

            return formationService.getStatus(formation.id) === true;
          };
      }]
    };
  };

  angular.module('formations').directive('formationSimpleTable', ['formationService', formationSimpleTable]);
}());