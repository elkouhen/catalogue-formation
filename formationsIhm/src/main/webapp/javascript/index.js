(function ()  {

	'use strict';

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
		}]);
})();