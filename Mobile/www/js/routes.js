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
      templateUrl: 'view/index.html'
    })


    .state('index.main', {
      url: 'main',
      views: {
        'indexMain': {
          templateUrl: 'view/index/main.html'
        }
      }
    })



    .state('index.login', {
      url: 'login',
      cache: false,
      views: {
        'indexLogin': {
          templateUrl: 'view/index/login.html',
          controller: 'LoginCtrl'
        }
      }
    })



    .state('index.register', {
      url: 'register',
      cache: false,
      views: {
        'indexRegister': {
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



    .state('menu.studymodeMain', {
      url: 'exam/studymode/main',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'view/main/exam/main.html',
          controller: 'StudyModeMainCtrl'
        }
      }
    })



    .state('menu.studymodeContent', {
      url: 'exam/studymode/exam',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'view/main/exam/content.html',
          controller: 'MockExamCtrl'
        }
      }
    })



    .state('menu.mockexamMain', {
      url: 'exam/mockexam/main',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'view/main/exam/main.html',
          controller: 'MockExamMainCtrl'
        }
      }
    })



    .state('menu.mockexamContent', {
      url: 'exam/mockexam/exam',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'view/main/exam/content.html',
          controller: 'MockExamCtrl'
        }
      }
    })



  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
