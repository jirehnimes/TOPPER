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

		if (!$localStorage.examOptions) {
			LocalStorage.moduleAll().then(
				function(success) {
					var _moduleList = renderList($.makeArray(success.rows));
					$localStorage.examOptions = {
						shuffle: true,
						list: _moduleList
					};
				}
			);
		}

		$scope.tmpOptions = angular.copy($localStorage.examOptions);

		Modal.init($scope, 'examoption');
	});

	$scope.$on('$ionicView.enter', function (e) {
		$scope.title =  _sType + ' Exam';
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
		Modal.open();
	};

	$scope.closeExamOption = function() {
		$scope.tmpOptions = angular.copy($localStorage.examOptions);
		Modal.close();
	};

	$scope.submitExamOption = function() {
		$localStorage.examOptions = angular.copy($scope.tmpOptions);
		Modal.close();
	}

});

