angular.module('topper.historyCtrl', [])

.controller('HistoryCtrl', function(
	$scope,
	$state,
	LocalStorage
) {

	// Before entering the home page
	$scope.$on('$ionicView.beforeEnter', function (e) {
		var _res = LocalStorage.getMockResults()

		if (_res === false) {
			$state.go('menu.home');
			return false;
		}

		_res.then(
			function(success) {
				if (success === false) {
					$state.go('menu.home');
				}

				$scope.exams = $.makeArray(success.rows);
			}
		);
	});

	// Home page is entered
 	$scope.$on('$ionicView.enter', function (e) {
	});

 	// Before leaving the home page
	$scope.$on('$ionicView.beforeLeave', function (e) {
	});
});

