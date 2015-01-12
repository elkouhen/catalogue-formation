(function () {

    'use strict';

    var formationSimpleTable = function (formationService) {
        return {
            restrict: 'A',
            scope: {
                formations: '='
            },
            templateUrl: 'partials/formations/directives/formation-table-directive.html',
            controller: function ($scope) {

                $scope.getStatus = function (formation) {

                    if (formationService.getStatus(formation.id) === true) {
                        return 'glyphicon-star';
                    }

                    return 'glyphicon-star-empty';
                };

                $scope.toggleStatus = function (formation) {

                    formationService.toggleStatus(formation.id);
                };
            }
        };
    };

    angular.module('formations').directive('formationTable', formationSimpleTable);
}());