angular.module('topper.resultExamCtrl', [])

.controller('ResultExamCtrl', function($scope, $state, $stateParams, $ionicHistory, Http) {

	$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
		viewData.enableBack = true;
	}); 

	// console.log($stateParams);

	$scope.questions = $stateParams.questions;

	$scope.answers = $stateParams.answers;

	$scope.results = [];

	// console.log($scope.questions);
	// console.log($scope.answers);

	$scope.goBack = function() {
		$ionicHistory.goBack();
	}

	function getResult() {
		if ($stateParams.questions) {
			$stateParams.questions.forEach(function(item, index) {
				var oData = {
					question_id: item.id,
					question_text: item.text,
					question_rationale: item.rationale,
					question_answer: getObjectByValue(item.selection, 'isAnswer', 1),
					answer: $stateParams.answers[index].choice,
					is_answer: $stateParams.answers[index].isAnswer
				};
				$scope.results[index] = oData;
			});
		}
	}

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

	getResult();

	console.log('RESULT');
	console.log($scope.results);

});

