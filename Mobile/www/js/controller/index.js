angular.module('topper.indexCtrl', [])

.controller('IndexCtrl', function($rootScope, $scope, $state, Http, LocalStorage) {

	// Before entering the index page
	// $scope.$on('$ionicView.beforeEnter', function (e) {

	// 	// Checking the user login session
	// 	LocalStorage.session().then(
	//         function(success) {

	//         	// If there is login session, go to first page
	//             if(success !== false){
	//                 return $state.go('menu.find');
	//             }
	//         }
	//     );
 //    });

	// Initial login data
	$scope.loginData = {
		email: '',
		password: ''
	}

	$scope.registerData = {

	};

	/**
	 * Do the login action
	 */
	$scope.doLogin = function() {
		$state.go('menu.home');
		// console.log($scope.loginData);
		// var _oData = $scope.loginData;
		// Http.post('api/login', _oData).then(
		// 	function success(success) {
		// 		var _oData = success;
		// 		if ((typeof _oData) === 'object') {
		// 			console.log('Login success!');
		// 			LocalStorage.init();
		// 			LocalStorage.login(_oData);

		// 			return $state.go('menu.find');
		// 		}
		// 		console.log('Login Failed!');
		// 		alert('Login Failed!');
		// 	}
		// );
	}

	/**
	 * Go to register page
	 */
	$scope.doRegister = function() {
		console.log($scope.registerData);

		Http.post('api/user/store', $scope.registerData).then(
			function success(mReturn) {
				if (mReturn === true) {
					alert('Registration successful!');
				} else {
					alert('Registration failed!');
				}

				$scope.registerData = {};
			}
		);

		// $state.go('register');
	}

});

