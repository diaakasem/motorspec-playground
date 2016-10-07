'use strict';

/**
 * @ngdoc overview
 * @name motospecApp
 * @description
 * # motospecApp
 *
 * Main module of the application.
 */
angular
  .module('motospecApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/xx', {
        templateUrl: 'views/xx.html',
        controller: 'XxCtrl',
        controllerAs: 'xx'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
