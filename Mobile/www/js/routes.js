angular.module('topper.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('index', {
      url: '/',
      abstract: true,
      templateUrl: 'view/index.html',
      controller: 'IndexCtrl'
    })



    .state('index.login', {
      url: 'login',
      cache: false,
      views: {
        'homeLogin': {
          templateUrl: 'view/index/login.html',
          controller: 'LoginCtrl'
        }
      }
    })



    .state('index.register', {
      url: 'register',
      cache: false,
      views: {
        'homeRegister': {
          templateUrl: 'view/index/register.html',
          controller: 'RegisterCtrl'
        }
      }
    })



    .state('menu', {
      url: '/',
      abstract: true,
      templateUrl: 'view/menu.html',
      controller: 'MenuCtrl'
    })



    .state('menu.home', {
      url: 'home',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'view/main/home.html',
          controller: 'HomeCtrl'
        }
      }
    })



    .state('menu.mockexam', {
      url: 'exam',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'view/main/mockexam.html',
          controller: 'MockExamCtrl'
        }
      }
    })



  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
