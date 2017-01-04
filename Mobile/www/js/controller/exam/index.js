angular.module('topper.examIndexCtrl', [])

.controller('ExamIndexCtrl', function($scope, $state, $stateParams, LocalStorage, Http, Modal) {

	var _sType = undefined;

	$scope.$on('$ionicView.beforeEnter', function (e) {
		if (_sType === undefined) {
			_sType = $stateParams.type;
		}
	});

	$scope.$on('$ionicView.enter', function (e) {
		$scope.title =  _sType + ' Exam';
	});

	$scope.$on('$ionicView.beforeLeave', function (e) {
	});

	$scope.startExam = function() {
		$state.go('menu.exam', {type: _sType});
	}

});

