/*global angular */
(function () {

  'use strict';

  var FormationListController = function ($scope, $stateParams, formationService) {

    if ($stateParams.id) {
      $scope.formations = formationService.listeFormations($stateParams.id);
    } else {
      $scope.formations = formationService.listeFormations();
    }
  };

  angular.module('formations')
    .controller('FormationListController', ['$scope', '$stateParams', 'formationService', FormationListController]);
}());