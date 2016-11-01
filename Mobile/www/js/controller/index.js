angular.module('topper.indexCtrl', [])

.controller('IndexCtrl', function($rootScope, $scope, $state, Http, LocalStorage) {

	// Before entering the index page
	$scope.$on('$ionicView.beforeEnter', function (e) {

		LocalStorage.init();

		// Checking the user login session
		LocalStorage.session().then(
	        function(success) {

	        	// If there is login session, go to first page
	            if(success !== false){
	                return $state.go('menu.home');
	            }
	        }
	    );
    });

	$scope.loginData = {};

	$scope.registerData = {};

	/**
	 * Do the login action
	 */
	$scope.doLogin = function() {
		console.log($scope.loginData);
		
		Http.post('api/user/login', $scope.loginData).then(
			function success(mReturn) {
				console.log(mReturn);
				alert(mReturn['msg']);
				if (mReturn['status'] === true) {
					LocalStorage.login(mReturn.data);
					$state.go('menu.home');
				}
			}
		);
	}

	/**
	 * Go to register page
	 */
	$scope.doRegister = function() {
		console.log($scope.registerData);

		Http.post('api/user/store', $scope.registerData).then(
			function success(mReturn) {
				console.log(mReturn);
				alert(mReturn.msg);
				if (mReturn.status === true) {
					$scope.registerData = {};
					$state.go('index');
				}
			}
		);
	}

});

