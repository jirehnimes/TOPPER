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

	$scope.$on('$ionicView.beforeLeave', function (e) {
	});

	$scope.checkType = function(sType) {
		return $scope._sType === sType;
	}

	$scope.selectAnswer = function(data) {
		$scope.answers[$scope.number] = data;
	}

	$scope.checkAnswer = function(data) {
		return {
			'button-light' : $scope.answers[$scope.number] !== data,
			'button-assertive' : $scope.answers[$scope.number] === data
		}
	}

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
});

