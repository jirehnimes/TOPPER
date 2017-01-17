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
  'ngStorage',
  'timer',

  // route
  'topper.routes',

  // controllers
  'topper.indexCtrl',
  'topper.loaderCtrl',
  'topper.menuCtrl',
  'topper.homeCtrl',
  'topper.profileCtrl',
  'topper.moduleCtrl',
  'topper.examIndexCtrl',
  'topper.examCtrl',
  'topper.examResultCtrl',
  'topper.examScoreCtrl',

  // services
  'topper.httpSrvc',
  'topper.localStorageSrvc',
  'topper.modalSrvc',
  'topper.popoverSrvc',
  'topper.cacheSrvc',
  'topper.utilSrvc',

  // bl
  'topper.sesssionBL',
  'topper.offlineLoginBL',

  // directives

  // model
  'topper.sessionModel',
  'topper.passwordModel',
  'topper.moduleModel',
  'topper.topicModel',
  'topper.questionModel',
  'topper.selectionModel',
  'topper.examModel',
  'topper.schoolModel',

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
