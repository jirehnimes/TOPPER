angular.module('topper.examResultCtrl', [])

.controller('ExamResultCtrl', function($scope, $rootScope, $state, $stateParams, $ionicHistory, Http) {

	$scope.$on('$ionicView.beforeEnter', function (event) {
	}); 

	$scope.$on('$ionicView.enter', function (e) {
		$rootScope.$on('ExamResults', function(e, data) {
            $scope.results = data;
        });

        $scope.goBack = function() {
			$ionicHistory.goBack();
		}
	});

});

