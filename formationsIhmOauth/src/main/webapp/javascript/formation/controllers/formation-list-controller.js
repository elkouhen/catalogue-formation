/*global angular */
(function () {

	'use strict';

	var FormationListController = function ($scope, $rootScope, $routeParams, formationService, AccessToken) {

		if ($routeParams.id) {
			formationService.listeFormations({
				categorie: $routeParams.id
			}).then(function (response) {
				$scope.formations = response.data;
			});
		} else {
			$scope.formations = formationService.listeFormations();
		}
	};


	angular.module('formations')
		.controller('FormationListController', ['$scope', '$rootScope', '$routeParams', 'formationService', 'AccessToken', FormationListController]);
}());