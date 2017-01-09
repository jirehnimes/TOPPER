angular.module('topper.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('index', {
      url: '/',
      templateUrl: 'view/index.html',
      controller: 'IndexCtrl'
    })



    .state('loader', {
      url: '/',
      templateUrl: 'view/loader.html',
      controller: 'LoaderCtrl'
    })



    .state('menu', {
      url: '/',
      templateUrl: 'view/menu.html',
      controller: 'MenuCtrl'
    })



    .state('menu.home', {
      url: 'home',
      views: {
        'menuContent': {
          templateUrl: 'view/home.html',
          controller: 'HomeCtrl'
        }
      }
    })



    .state('menu.profile', {
      url: 'profile',
      views: {
        'menuContent': {
          templateUrl: 'view/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })



    .state('menu.module', {
      url: 'module',
      views: {
        'menuContent': {
          templateUrl: 'view/module.html',
          controller: 'ModuleCtrl'
        }
      }
    })



    .state('menu.exam_index', {
      url: 'exam_index/:type',
      views: {
        'menuContent': {
          templateUrl: 'view/exam/index.html',
          controller: 'ExamIndexCtrl'
        }
      }
    })



    .state('menu.exam', {
      url: 'exam/:type',
      views: {
        'menuContent': {
          templateUrl: 'view/exam/exam.html',
          controller: 'ExamCtrl'
        }
      }
    })



    .state('menu.exam_score', {
      url: 'exam_score',
      views: {
        'menuContent': {
          templateUrl: 'view/exam/score.html',
          controller: 'ExamScoreCtrl'
        }
      }
    })



    .state('menu.exam_result', {
      url: 'exam_result',
      views: {
        'menuContent': {
          templateUrl: 'view/exam/result.html',
          controller: 'ExamResultCtrl'
        }
      }
    })



  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
