angular.module('topper.homeCtrl', [])

.controller('HomeCtrl', function(
	$scope,
	$state,
	SessionBL
) {

	// Before entering the home page
	$scope.$on('$ionicView.beforeEnter', function (e) {
		SessionBL.check();
	});

	// Home page is entered
 	$scope.$on('$ionicView.enter', function (e) {
	});

 	// Before leaving the home page
	$scope.$on('$ionicView.beforeLeave', function (e) {
	});

	$scope.goExam = function(sType) {
		$state.go('menu.exam_index', {type: sType});
	}

	$scope.doLogout = function() {
		SessionBL.logout();
	}

});

