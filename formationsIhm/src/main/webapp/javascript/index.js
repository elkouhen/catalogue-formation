(function ()  {

	'use strict';

	var angular = require('./vendors/angular');

	require('angular-route/angular-route');

	require('angular-resource/angular-resource');

	require('angular-bootstrap-temporary/ui-bootstrap.src.js');

	require('./formations/formations-module'); 

	angular.module('formationsApp', ['ngRoute', 'ngResource', 'formations'])
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/formations/:id', {
				templateUrl: 'partials/formations/formation-table.html',
				controller: 'FormationListController'
			}).
			when('/selection', {
				templateUrl: 'partials/formations/formation-simple-table.html',
				controller: 'SelectionController'
			}).
			otherwise({
				redirectTo: '/formations/tech-java-ee' 
			});
		}])
	.directive('isActive', require('./directives/is-active'));
})();