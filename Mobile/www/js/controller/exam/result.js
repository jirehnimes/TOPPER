angular.module('topper.examResultCtrl', [])

.controller('ExamResultCtrl', function($scope, $rootScope, $state, $stateParams, $ionicHistory, Http, Cache) {

	$scope.$on('$ionicView.beforeEnter', function (event) {
	}); 

	$scope.$on('$ionicView.enter', function (e) {
        $scope.results = Cache.get('ExamResults');

        $scope.goBack = function() {
			$ionicHistory.goBack();
		}
	});

});

