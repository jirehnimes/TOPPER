angular.module('topper.examIndexCtrl', [])

.controller('ExamIndexCtrl', function(
	$scope,
	$state,
	$stateParams,
	$localStorage,
	LocalStorage,
	Http,
	Modal
) {

	var _sType = undefined;

	function renderList(oData) {
		oData.forEach(function(item, index) {
			item.iFlag = true;
		});

		return oData;
	}

	$scope.$on('$ionicView.beforeEnter', function (e) {
		if (_sType === undefined) {
			_sType = $stateParams.type;
		}

		Modal.init($scope, 'examoption');
	});

	$scope.$on('$ionicView.enter', function (e) {
		$scope.title =  _sType + ' Exam';

		LocalStorage.moduleAll().then(
			function(success) {
				$scope.moduleList = renderList($.makeArray(success.rows));
				$scope.tmpModuleList = $scope.moduleList;
			}
		);
	});

	$scope.$on('$ionicView.beforeLeave', function (e) {
		Modal.destroy();
	});

	$scope.startExam = function() {
		delete $localStorage.examAnswers;
		$scope.$broadcast('timer-stop');
		$state.go('menu.exam', {type: _sType});
	}

	// Option Modal

	$scope.openExamOption = function() {
		$scope.tmpModuleList = $scope.moduleList;
		Modal.open();
	};

	$scope.closeExamOption = function() {
		$scope.tmpModuleList = $scope.moduleList;
		Modal.close();
	};

	$scope.submitExamOption = function() {
		$scope.moduleList = $scope.tmpModuleList;
		Modal.close();
	}

});

