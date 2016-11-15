angular.module('topper.examMockExamCtrl', [])

.controller('ExamMockExamCtrl', function($scope, $rootScope, $state, Http, Popover) {

	console.log('Entered exam');

	$scope.$on('$ionicView.beforeEnter', function (e) {
		
		$scope.number = 0;

		$scope.answers = {};

		Http.get('api/question').then(
			function success(success) {
				console.log(success);
				$scope.questions = success;
			}
		);

	});

	$scope.$on('$ionicView.enter', function (e) {

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
							if (Object.keys($scope.answers).length !== $scope.questions.length) {
								alert('There are unanswered questions!');
							} else {
								var _oData = {
									questions: $scope.questions,
									answers: $scope.answers
								};

								$rootScope.$emit('ExamAnswers', _oData);

								$state.go('menu.exam_score');
							}
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

});

