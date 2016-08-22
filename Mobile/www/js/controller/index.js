angular.module('topper.indexCtrl', [])

.controller('IndexCtrl', function($rootScope, $scope, $state) {

	$scope.display = 'login';

	$scope.loginData = {
		email: '',
		password: ''
	};

	$scope.registerData = {
		fullname: '',
		email: '',
		password: '',
		rPassword: ''
	}

	$scope.doUser = function(sParam) {
		$scope.display = 'login';
		if (sParam === 'register') {
			$scope.display = 'register';
		}
		$state.go('index');
	};

});

