/*global angular */
(function () {

	'use strict';

	var FormationListController = function ($scope, $rootScope, $routeParams, formationService, AccessToken) {

		if ($routeParams.id) {
			$scope.formations = formationService.listeFormations({
				categorie: $routeParams.id
			});
		} else {
			$scope.formations = formationService.listeFormations();
		}
	};


	angular.module('formations')
		.controller('FormationListController', ['$scope', '$rootScope', '$routeParams', 'formationService', 'AccessToken', FormationListController]);
}());