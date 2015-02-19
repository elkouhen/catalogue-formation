/*global angular */
(function () {

	'use strict';

	angular.module('formationsApp', ['ngRoute', 'ngResource', 'formations'])
		.config(['$routeProvider',
             function ($routeProvider) {
				$routeProvider.
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