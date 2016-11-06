angular.module('topper.examMockExamCtrl', [])

.controller('ExamMockExamCtrl', function($scope, $state, Http) {

	$scope.number = 0;

	Http.get('api/question').then(
		function success(success) {
			console.log(success);
			$scope.questions = success;
		}
	);

	$scope.goPrev = function() {
		if ($scope.number !== 0) {
			--$scope.number;
		}
	}

	$scope.goNext = function() {
		if ($scope.number !== $scope.questions.length - 1) {
			++$scope.number;
		}
	}

});

