angular.module('topper.loaderCtrl', [])

.controller('LoaderCtrl', function(
	$scope, 
	$state, 
	LocalStorage
) {

	$scope.status = '';

	// Before entering
	$scope.$on('$ionicView.beforeEnter', function (e) {
	});

	// Entered
 	$scope.$on('$ionicView.enter', function (e) {
		LocalStorage.loader($scope);
	});

 	// Before leaving the page
	$scope.$on('$ionicView.beforeLeave', function (e) {
	});
});

