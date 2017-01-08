angular.module('topper.examCtrl', [])

.controller('ExamCtrl', function($scope, $rootScope, $state, $stateParams, Http, Popover, Cache) {

	$scope._sType = undefined;

	$scope.$on('$ionicView.beforeEnter', function (e) {
		
		$scope.number = 0;

		$scope.answers = {};

		$scope.rationale = 'Show';

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
			'button-outline'  : $scope.answers[$scope.number] !== data,
			'button-light'    : $scope.answers[$scope.number] !== data,
			'button-positive' : $scope.answers[$scope.number] === data
		};
	}

	$scope.fontColor = function(data) {
		if ($scope.answers[$scope.number] === data) {
			return {
				'color': 'white'
			};
		}
	}

	$scope.goPrev = function() {
		if ($scope.number !== 0) {
			--$scope.number;
		}

		$scope.rationale = 'Show';
	}

	$scope.goNext = function() {
		if ($scope.number === $scope.questions.length - 1) {
			Popover.confirmEndOfExam().then(
				confirmSuccess
			);
		} else {
			++$scope.number;
		}

		$scope.rationale = 'Show';
	}

	$scope.showRationale = function() {
		if ($scope.rationale === 'Show') {
			$scope.rationale = 'Hide';
		} else {
			$scope.rationale = 'Show';
		}
	}

	function confirmSuccess(success) {
		if (success === true) {
			if (Object.keys($scope.answers).length !== $scope.questions.length) {
				alert('There are unanswered questions!');
			} else {
				var _oData = {
					examType  : $scope._sType,
					questions : $scope.questions,
					answers   : $scope.answers
				};

				Cache.set('ExamAnswers', _oData);

				$state.go('menu.exam_score');
			}
		}
	}
});

