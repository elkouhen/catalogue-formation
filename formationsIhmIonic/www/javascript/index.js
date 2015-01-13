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
      templateUrl: 'templates/menu.html'
      /* ,
      controller: 'AppCtrl' */
    })
    .state('app.java-ee', {
      url: '/formations/tech-java-ee',
      views: {
        'tab-java-ee': {
          templateUrl: 'partials/formations/formation-table.html',
          controller: 'FormationListController'
        }
      }
    })
    .state('app.web', {
      url: '/formations/tech-web',
      views: {
        'tab-web': {
          templateUrl: 'partials/formations/formation-table.html',
          controller: 'FormationListController'
        }
      }
    })
    .state('app.methodes-agiles', {
      url: '/formations/methodes-agiles',
      views: {
        'tab-methodes-agiles': {
          templateUrl: 'partials/formations/formation-table.html',
          controller: 'FormationListController'
        }
      }
    })
    .state('app.selection', {
      url: '/selection',
      views: {
        'tab-web': {
          templateUrl: 'partials/formations/formation-simple-table.html',
          controller: 'FormationListController'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/formations/tech-java-ee');
});