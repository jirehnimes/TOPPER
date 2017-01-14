angular.module('topper.indexCtrl', [])

.controller('IndexCtrl', function(
	$rootScope,
	$scope,
	$state,
	$ionicPlatform,
	$cordovaNetwork,
	$cordovaToast,
	Http,
	LocalStorage
) {

	// $ionicPlatform.ready(function() {
	// 	if (window.cordova) {
	// 		alert($cordovaNetwork.isOnline());
	// 	}
	// });

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

	$ionicPlatform.ready(function() {

		// listen for Online event
	    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
			$cordovaToast.show('Network is online.', 'long', 'bottom');
	    });

	    // listen for Offline event
	    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
			$cordovaToast.show('Network is offline.', 'long', 'bottom');
	    });

		/**
		 * Do the login action
		 */
		$scope.doLogin = function() {
			// if (window.cordova && $cordovaNetwork.isOnline() === true) {
					Http.post('api/user/login', $scope.loginData).then(
						function success(mReturn) {
							alert(mReturn['msg']);
							if (mReturn['status'] === true) {
								LocalStorage.login('online', $scope.loginData);
							}
						}
					);
			// } else {
			// 	LocalStorage.login('offline', $scope.loginData);
			// }
		}
	});

	

	/**
	 * Go to register page
	 */
	$scope.doRegister = function() {
		if (window.cordova && $cordovaNetwork.isOnline() === true) {
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
		} else {
			$cordovaToast.show('Can\'t register. Network is offline.', 'long', 'bottom');
		}
	}

});

