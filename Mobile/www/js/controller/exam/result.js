angular.module('topper.resultExamCtrl', [])

.controller('ResultExamCtrl', function($scope, $state, $stateParams, $ionicHistory, Http) {

	$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
		viewData.enableBack = true;
	}); 

	console.log($stateParams);

	$scope.questions = $stateParams.questions;

	$scope.answers = $stateParams.answers;

	console.log($scope.questions);
	console.log($scope.answers);

	$scope.goBack = function() {
		$ionicHistory.goBack();
	}

});

