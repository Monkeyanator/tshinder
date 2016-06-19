'use strict';

/**
 * @ngdoc overview
 * @name angularProjectsApp
 * @description
 * # angularProjectsApp
 *
 * Main module of the application.
 */
angular
  .module('angularProjectsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'akoenig.deckgrid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/saved', {
        templateUrl: 'views/saved.html',
        controller: 'SavedCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
