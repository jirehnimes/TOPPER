angular.module('topper.indexCtrl', [])

.controller('IndexCtrl', function(
	$rootScope,
	$scope,
	$state,
	$localStorage,
    $sessionStorage,
	$ionicPlatform,
	$cordovaNetwork,
	$cordovaToast,
	Http,
	LocalStorage,
	SessionBL
) {
	// Before entering the index page
	$scope.$on('$ionicView.beforeEnter', function (e) {
		LocalStorage.init();

    	if ($sessionStorage.auth) {
	        return $state.go('loader');
    	}
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
			SessionBL.login($scope.loginData);
		}

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
});

