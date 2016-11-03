angular.module('topper.moduleCtrl', [])

.controller('ModuleCtrl', function($scope, $state, Http, LocalStorage) {

	// Before entering the profile page
	$scope.$on('$ionicView.beforeEnter', function (e) {
		
		// Checking the user login session
		// LocalStorage.session().then(
		// 	function(success) {
				
		// 		// If fails, go back to login page
		// 		if(success === false){
		//  			$state.go('index');
		// 		}

		// 		// If success, save to variable
		// 		$scope.session = success;
		// 		console.log($scope.session);


		// 	}
		// );

		LocalStorage.session().then(
	        function(success) {

	        	// If fails, go back to login page
	            if(success === false){
	                return $state.go('index');
	            }

	            // Since this is the first page after login,
	            // it will send to all page the login session
	            // to be checked.
	            $scope.$emit('Session', success);
	        }
	    );

		// Get the server URL
		$scope.server = Http.session();
	});

	$scope.$on('$ionicView.enter', function (e) {

		$scope.$on('Session', function (e, session) {
			console.log(session);
		
			Http.get('api/module/' + session.user_id).then(
				function(success) {
					console.log(success);
					if (success.status === true) {
						$scope.modules = success.data.modules;
						$scope.transaction = success.data.transaction;

						console.log($scope.modules);
						console.log($scope.transaction);
					} else {
						console.error('Data error.');
					}
				}
			);
		});

	});

});

