angular.module('topper.examStudyIndexCtrl', [])

.controller('ExamStudyIndexCtrl', function($scope, $state, LocalStorage, Http, Modal) {

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

	$scope.$on('$ionicView.enter', function (e) {

		$scope.title = 'Study Mode';

		Modal.init($scope, 'examoption');

		$scope.openExamOption = function() {
			Modal.open();
		};

		$scope.closeExamOption = function() {
			Modal.close();
		};

		$scope.submitExamOption = function() {
			
		}

	});

	$scope.$on('$ionicView.beforeLeave', function (e) {
		Modal.destroy();
	});

});

