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

		// Get the server URL
		$scope.server = Http.session();
	});

});

