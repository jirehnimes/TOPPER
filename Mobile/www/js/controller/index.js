angular.module('topper.indexCtrl', [])

.controller('IndexCtrl', function($scope, $state) {

	$scope.display = 'login';

	$scope.doLogin = function() {
		$state.go('menu.home');
	}	

});

