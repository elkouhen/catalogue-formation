/*global angular */
(function () {

	'use strict';

	var FormationListController = function ($scope, $rootScope, $routeParams, formationService, AccessToken) {

		$scope.$on('oauth:login', function (event, token) {
			console.log('Authorized third party app with token', token.access_token);
		});

		$scope.$on('oauth:logout', function (event) {
			console.log('The user has signed out');
		});

		$scope.$on('oauth:loggedOut', function (event) {
			console.log('The user is not signed in');
		});

		$scope.$on('oauth:denied', function (event) {
			console.log('The user did not authorize the third party app');
		});

		$scope.$on('oauth:expired', function (event) {
			console.log('The access token is expired. Please refresh.');
		});

		$scope.$on('oauth:profile', function (profile) {
			console.log('User profile data retrieved: ', profile);
		});

		if ($routeParams.id) {
			$scope.formations = formationService.listeFormations({
				categorie: $routeParams.id,
				token: AccessToken.get()
			});
		} else {
			$scope.formations = formationService.listeFormations({
				token: AccessToken.get()
			});
		}
	};

	angular.module('formations')
		.controller('FormationListController', ['$scope', '$rootScope', '$routeParams', 'formationService', 'AccessToken', FormationListController]);
}());