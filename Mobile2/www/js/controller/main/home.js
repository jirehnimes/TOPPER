angular.module('topper.homeCtrl', [])

.controller('HomeCtrl', function($scope, $state) {

	$scope.doLogout = function() {
		$state.go('index.main');
	}

});

