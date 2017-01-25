angular.module('topper.examIndexCtrl', [])

.controller('ExamIndexCtrl', function(
	$scope,
	$state,
	$stateParams,
	$localStorage,
	LocalStorage,
	Http,
	Modal,
	Util,
	SessionBL
) {

	var _sType = undefined;

	function renderList(oData) {
		oData.forEach(function(item, index) {
			item.iFlag = true;
		});

		return oData;
	}

	$scope.$on('$ionicView.beforeEnter', function (e) {
		SessionBL.check();

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

		delete $localStorage.examAnswers;
		delete $localStorage.exam;
		$scope.$broadcast('timer-stop');

		$scope.tmpOptions = angular.copy($localStorage.examOptions);

		Modal.init($scope, 'examoption');
	});

	$scope.$on('$ionicView.enter', function (e) {
		$scope.title =  _sType + ' Exam';
		$scope.optionFlag = (_sType === 'study');
	});

	$scope.$on('$ionicView.beforeLeave', function (e) {
		Modal.destroy();
	});

	$scope.startExam = function() {
		LocalStorage.loadExam().then(
			function(success) {
				if (success === 'error1') {
					Util.message('No selected module.');
            		$state.go('menu.exam_index', {type: _sType});
				} else if (success === 'error2') { 
					Util.message('Module selected doesn\'t have topics.');
            		$state.go('menu.exam_index', {type: _sType});
				} else {
					$localStorage.exam = success;
					$state.go('menu.exam', {type: _sType});
				}
			}
		);
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

