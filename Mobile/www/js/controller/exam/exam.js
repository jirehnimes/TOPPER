angular.module('topper.examCtrl', [])

.controller('ExamCtrl', function($scope, $state, $stateParams, Http, Popover) {

	$scope._sType = undefined;

	$scope.$on('$ionicView.beforeEnter', function (e) {
		
		$scope.number = 0;

		$scope.answers = {};

		Http.get('api/question').then(
			function success(success) {
				console.log(success);
				$scope.questions = success;
			}
		);
		
		if ($scope._sType === undefined) {
			$scope._sType = $stateParams.type;
		}
	});

	$scope.$on('$ionicView.enter', function (e) {
		console.log($scope._sType);
	});

	$scope.checkType = function(sType) {
		return $scope._sType === sType;
	}

});

