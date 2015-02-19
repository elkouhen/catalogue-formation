/*global angular */
(function () {

	'use strict';

	angular.module('formationsApp', ['ngRoute', 'ngResource', 'ngStorage', 'oauth', 'formations'])
		.config(['$routeProvider', '$locationProvider',
             function ($routeProvider, $locationProvider) {
				$routeProvider.
				when('/access_token=:accessToken', {
					template: '',
					controller: function ($location, AccessToken) {
						var hash = $location.path().substr(1);
						AccessToken.setTokenFromString(hash);
						$location.path('/');
						$location.replace();
					}
				}).
				when('/formations/:id', {
					templateUrl: '/formations/partials/formations/formation-table.html',
					controller: 'FormationListController'
				}).
				when('/selection', {
					templateUrl: '/formations/partials/formations/formation-simple-table.html',
					controller: 'FormationListController'
				}).
				otherwise({
					redirectTo: '/formations/tech-java-ee'
				});

             }]);

}());