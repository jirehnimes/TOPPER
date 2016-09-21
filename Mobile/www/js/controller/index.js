angular.module('topper.indexCtrl', [])

.controller('IndexCtrl', function($scope, $state) {

	$scope.doLogin = function() {
		$state.go('menu.home');
	}

});

