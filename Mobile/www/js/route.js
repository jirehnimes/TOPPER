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



    .state('menu.exam_mock', {
      url: 'exam_mock',
      views: {
        'menuContent': {
          templateUrl: 'view/exam/index.html',
          controller: 'ExamMockIndexCtrl'
        }
      }
    })



    .state('menu.exam_mock_exam', {
      url: 'exam_mock_exam',
      views: {
        'menuContent': {
          templateUrl: 'view/exam/exam.html',
          controller: 'ExamMockExamCtrl'
        }
      }
    })



    .state('menu.exam_study', {
      url: 'exam_study',
      views: {
        'menuContent': {
          templateUrl: 'view/exam/index.html',
          controller: 'ExamStudyIndexCtrl'
        }
      }
    })



    .state('menu.exam_study_exam', {
      url: 'exam_study_exam',
      views: {
        'menuContent': {
          templateUrl: 'view/exam/exam.html',
          controller: 'ExamStudyExamCtrl'
        }
      }
    })



    .state('menu.exam_result', {
      url: 'exam_result',
      views: {
        'menuContent': {
          templateUrl: 'view/exam/result.html',
          controller: 'ResultExamCtrl'
        }
      },
      params: {
        questions: null,
        answers: null
      }
    })



  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
