angular.module('topper.examMockExamCtrl', [])

.controller('ExamMockExamCtrl', function($scope, $state, Http, Popover) {

	console.log('Entered exam');

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
					if (success === true) {
						console.log($scope.answers);
						// if ($scope.answers.length !== $scope.questions.length) {
						// 	alert('There are unanswered questions!');
						// } else {
						// 	$state.go('menu.exam_result');
						// }
						var _oData = {
							questions: $scope.questions,
							answers: $scope.answers
						};

						$state.go('menu.exam_result', _oData);
					}
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

