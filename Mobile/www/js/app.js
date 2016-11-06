// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('topper', [
  'ionic',
  'ngAnimate',
  'angular-md5',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ionic-material',
  'ngCordova',
  'slick',

  // route
  'topper.routes',

  // controllers
  'topper.indexCtrl',
  'topper.menuCtrl',
  'topper.homeCtrl',
  'topper.profileCtrl',
  'topper.moduleCtrl',
  'topper.examMockIndexCtrl',
  'topper.examMockExamCtrl',
  'topper.examStudyIndexCtrl',
  'topper.examStudyExamCtrl',

  // services
  'topper.httpSrvc',
  'topper.localStorageSrvc',
  'topper.modalSrvc',

  // directives

  // model
  'topper.sessionModel',
  'topper.moduleModel',
  
  // filters
  'topper.sentenceCaseFilter',
  'topper.rangeFilter',

])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
