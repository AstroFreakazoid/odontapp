// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('dentistapp',
  ['ionic',
    'onezone-datepicker',
    'ngCordova',
    'dentistapp.controllers',
    'dentistapp.services'])

.run(function($ionicPlatform, AppService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    AppService.init();
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.navBar.alignTitle('center');
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          controller: 'LoginCtrl',
          templateUrl: 'templates/register.html',

        }
      }
    })
    .state('app.messages', {
      url: '/messages',
      views: {
        'menuContent': {
          controller: 'AppCtrl',
          templateUrl: 'templates/messages.html',
        }
      }
    })
    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('app.history', {
      url: '/history',
      views: {
        'menuContent': {
          controller: 'AppCtrl',
          templateUrl: 'templates/history.html',
        }
      }
    })
    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          controller: 'AppCtrl',
          templateUrl: 'templates/dashboard.html'
        }
      }
    })
    .state('app.payment', {
      url: '/payment',
      views: {
        'menuContent': {
          controller: 'AppCtrl',
          templateUrl: 'templates/payment.html'
        }
      }
    })
    .state('app.profile', {
      url: '/profile',
      controller: 'AppCtrl',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html'
        }
      }
    })
    .state('app.questionary', {
      url: '/questionary',
      views: {
        'menuContent': {
          controller: 'AppCtrl',
          templateUrl: 'templates/questionary.html'

        }
      }
    })
    .state('app.calendar', {
      url: '/calendar',
      views: {
        'menuContent': {
          templateUrl: 'templates/calendar.html',
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.appointment', {
      url: '/appointment',
      views: {
        'menuContent': {
          templateUrl: 'templates/appointment.html',
          controller: 'AppCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
