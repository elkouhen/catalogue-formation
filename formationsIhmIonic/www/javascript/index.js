// Ionic Starter App


angular.module('formationsApp', ['ionic', 'ngResource', 'formations'])

.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('app', {
				url: '/app',
				abstract: true,
				controller: 'MenuController',
				templateUrl: 'partials/menus.html'
			})
			.state('app.formations', {
				url: '/formations/:id',
				views: {
					'menuContent': {
						templateUrl: 'partials/formations/formation-table.html',
						controller: 'FormationListController'
					}
				}
			})
			.state('app.selection', {
				url: '/maselection',
				views: {
					'menuContent': {
						templateUrl: 'partials/formations/formation-simple-table.html',
						controller: 'FormationListController'
					}
				}
			});
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app/maselection');
	})
	.controller('MenuController', function () {

	});