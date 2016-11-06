angular.module('topper.moduleCtrl', [])

.controller('ModuleCtrl', function($scope, $state, Http, LocalStorage) {

	// Before entering the profile page
	$scope.$on('$ionicView.beforeEnter', function (e) {
		
		// Checking the user login session
		LocalStorage.session().then(
			function(success) {
				
				// If fails, go back to login page
				if(success === false){
		 			$state.go('index');
				}

				// If success, save to variable
				$scope.session = success;
				console.log($scope.session);


			}
		);

		// LocalStorage.session().then(
	 //        function(success) {

	 //        	// If fails, go back to login page
	 //            if(success === false){
	 //                return $state.go('index');
	 //            }

	 //            // Since this is the first page after login,
	 //            // it will send to all page the login session
	 //            // to be checked.
	 //            $scope.$emit('Session', success);
	 //        }
	 //    );

		// Get the server URL
		$scope.server = Http.session();
	});

	$scope.$on('$ionicView.enter', function (e) {
		
		Http.get('api/module/' + $scope.session.user_id).then(
			function(success) {
				console.log(success);
				if (success.status === true) {
					$scope.modules = success.data;
					console.log($scope.modules);
				} else {
					console.error('Data error.');
				}
			}
		);
			
		$scope.renderButton = function(bData, iBtn) {
			if (bData === true && iBtn === 1) {
				return true;
			} else if (bData === false && iBtn === 1) {
				return false;
			} else if (bData === true && iBtn === 2) {
				return false;
			} else if (bData === false && iBtn === 2) {
				return true;
			}
		}

	});

});

