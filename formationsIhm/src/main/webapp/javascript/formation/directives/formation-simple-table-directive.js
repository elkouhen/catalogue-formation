(function () {

    'use strict';

    var formationTable = function (formationService) {
        return {
            restrict: 'A',
            scope: {
                formations: '='
            },
            templateUrl: 'partials/formations/directives/formation-simple-table-directive.html',
            controller: function ($scope) {

                $scope.getStatus = function (formation) {

                    return formationService.getStatus(formation.id) === true;
                };
            }
        };
    };

    angular.module('formations').directive('formationSimpleTable', formationTable);
}());