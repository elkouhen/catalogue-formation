/*global angular */
(function () {

	'use strict';
	var AppConfig = function ($routeProvider, $locationProvider, $httpProvider) {

		$routeProvider.
		when('/login', {
			templateUrl: 'partials/authentication/login.html'
		}).
		when('/formations/:id', {
			templateUrl: 'partials/formations/formation-table.html',
			controller: 'FormationListController'
		}).
		when('/selection', {
			templateUrl: 'partials/formations/formation-simple-table.html',
			controller: 'FormationListController'
		}).
		when('/access_token=:accessToken', {
			template: '',
			controller: function ($location, AccessToken) {
				var hash = $location.path().substr(1);

				var patt = /expires_in=(.*)/

				var expires_in = hash.match(patt)[1];

				hash = hash + '&expires_at=' + (new Date(new Date().getTime() + parseInt(expires_in * 1000)));

				AccessToken.setTokenFromString(hash);
				$location.path('/');
				$location.replace();
			}
		}).
		otherwise({
			redirectTo: '/formations/tech-java-ee'
		});

		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$httpProvider.interceptors.push('oauthHttpInterceptor');

		//$locationProvider.html5Mode(false);

	};

	var oauthHttpInterceptor = function (AccessToken) {
		return {
			'request': function (config) {
				// This is just example logic, you could check the URL (for example)
				//if (config.headers.Authorization === 'Bearer') {
				if (AccessToken.get()) {
					config.headers['Authorization'] = 'Bearer ' + AccessToken.get().access_token;
				}
				//}
				return config;
			}
		};
	};


	angular.module('formationsApp', ['ngRoute', 'ngResource', 'formations', 'oauth'])
		.config(['$routeProvider', '$locationProvider', '$httpProvider', AppConfig])
		.factory('oauthHttpInterceptor', oauthHttpInterceptor);

}());