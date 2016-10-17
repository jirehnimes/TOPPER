angular.module('topper.homeCtrl', [])

.controller('HomeCtrl', function($scope, $state, $interval, Http, LocalStorage) {

	// Before entering the home page
	$scope.$on('$ionicView.beforeEnter', function (e) {
		// console.log('Entered home');

		// If login session is undefined go back to login page
		// if ($scope.session === undefined) {
		// 	$state.go('index');
		// }

		// $scope.server = Http.session();
	});

	// Home page is entered
 	$scope.$on('$ionicView.enter', function (e) {


	});

 	// Before leaving the home page
	$scope.$on('$ionicView.beforeLeave', function (e) {


	});

});

