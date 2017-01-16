angular.module('topper.homeCtrl', [])

.controller('HomeCtrl', function(
	$scope,
	$state,
	$interval,
	$localStorage,
    $sessionStorage,
	Http,
	LocalStorage
) {

	// Before entering the home page
	$scope.$on('$ionicView.beforeEnter', function (e) {
		console.log('Entered home');

		// // Checking the user login session
		// LocalStorage.session().then(
	 //        function(success) {

	 //        	console.log('To set session');
	 //        	console.log(success);

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
	});

	// Home page is entered
 	$scope.$on('$ionicView.enter', function (e) {
	});

 	// Before leaving the home page
	$scope.$on('$ionicView.beforeLeave', function (e) {
	});

	$scope.goExam = function(sType) {
		$state.go('menu.exam_index', {type: sType});
	}

});

