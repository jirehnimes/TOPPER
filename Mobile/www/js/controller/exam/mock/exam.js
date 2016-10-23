angular.module('topper.examMockExamCtrl', [])

.controller('ExamMockExamCtrl', function($scope, $state, Http) {

	Http.get('api/module').then(
		function success(success) {
			console.log(success);
			$scope.questions = success;
		}
	);

});

