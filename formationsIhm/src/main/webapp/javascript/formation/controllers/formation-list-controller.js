(function () {

    'use strict';

    var FormationListController = function ($scope, $routeParams, formationService) {

        if ($routeParams.id) {
            $scope.formations = formationService.listeFormations($routeParams.id);
        } else {
            $scope.formations = formationService.listeFormations();
        }
    };

    angular.module('formations').controller('FormationListController', FormationListController);
}());