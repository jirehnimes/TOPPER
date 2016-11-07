angular.module('topper.examMockExamCtrl', [])

.controller('ExamMockExamCtrl', function($scope, $state, Http, Popover) {

	$scope.number = 0;

	$scope.answers = {};

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
		if ($scope.number === $scope.questions.length - 1) {
			Popover.confirmEndOfExam().then(
				function(success) {
					console.log(success);
				}
			);
		} else {
			++$scope.number;
		}
	}

	$scope.selectAnswer = function(num, data) {
		$scope.answers[num] = data;
		console.log($scope.answers);
	}

});

