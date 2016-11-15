angular.module('topper.examScoreCtrl', [])

.controller('ExamScoreCtrl', function($scope, $rootScope, $state, $ionicHistory, Http) {

	$scope.$on('$ionicView.beforeEnter', function (event) {
		// function getObjectByValue(array, key, value) {
		// 	var _answer = undefined;
		// 	array.some(function(item, index) {
		// 		if (item[key] === value) {
		// 			_answer = array[index].choice;
		// 			return true;
		// 		}
		// 	});
		// 	return _answer;
		// }

		// function countScore(array) {
		// 	var _score = 0;
		// 	array.forEach(function(item, index) {
		// 		if (item.is_answer === 1) {
		// 			_score++;
		// 		}
		// 	});
		// 	return _score;
		// }

		// $scope.results = [];

		// $scope.getResult = function() {
		// 	if ($scope.questions) {
		// 		$scope.questions.forEach(function(item, index) {
		// 			var oData = {
		// 				question_id: item.id,
		// 				question_text: item.text,
		// 				question_rationale: item.rationale,
		// 				question_answer: getObjectByValue(item.selection, 'isAnswer', 1),
		// 				answer: $scope.answers[index].choice,
		// 				is_answer: $scope.answers[index].isAnswer
		// 			};
		// 			$scope.results[index] = oData;
		// 		});
		// 	}
		// }

		// $rootScope.$on('ExamAnswers', function(e, data) {
  //           $scope.questions = data.questions;
  //           $scope.answers = data.answers;

  //           $scope.getResult();

  //           console.log('Result');
  //           console.log($scope.results);

		// 	$scope.score = countScore($scope.results);
		// 	$scope.total = $scope.results.length;
		// 	$scope.percentage = ($scope.score / $scope.results.length) * 100;
  //       });
		// $scope.results = [];
	}); 

	$scope.$on('$ionicView.enter', function (e) {
		function getObjectByValue(array, key, value) {
			var _answer = undefined;
			array.some(function(item, index) {
				if (item[key] === value) {
					_answer = array[index].choice;
					return true;
				}
			});
			return _answer;
		}

		function countScore(array) {
			var _score = 0;
			array.forEach(function(item, index) {
				if (item.is_answer === 1) {
					_score++;
				}
			});
			return _score;
		}

		$scope.getResult = function() {
			var _result = [];
			if ($scope.questions) {
				$scope.questions.forEach(function(item, index) {
					var oData = {
						question_id: item.id,
						question_text: item.text,
						question_rationale: item.rationale,
						question_answer: getObjectByValue(item.selection, 'isAnswer', 1),
						answer: $scope.answers[index].choice,
						is_answer: $scope.answers[index].isAnswer
					};
					_result[index] = oData;
				});
				return _result;
			}
		}

		$rootScope.$on('ExamAnswers', function(e, data) {
            $scope.questions = data.questions;
            $scope.answers = data.answers;

            $scope.results = $scope.getResult();

            console.log('Result');
            console.log($scope.results);

			$scope.score = countScore($scope.results);
			$scope.total = $scope.results.length;
			$scope.percentage = ($scope.score / $scope.results.length) * 100;
        });

        $scope.goResults = function() {
			console.log('Go to results');
			console.log($scope.results);

			$rootScope.$emit('ExamResults', $scope.results);
			
			$state.go('menu.exam_result');
		}
	});

});

