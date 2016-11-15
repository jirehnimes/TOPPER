angular.module('topper.examResultCtrl', [])

.controller('ExamResultCtrl', function($scope, $rootScope, $state, $stateParams, $ionicHistory, Http) {

	$scope.$on('$ionicView.beforeEnter', function (event) {
		// $rootScope.$on('ExamResults', function(e, data) {
  //       	console.log('Entered result');
  //       	console.log(data);
  //           $scope.results = data;
  //       });
	}); 

	$scope.$on('$ionicView.enter', function (e) {
		$rootScope.$on('ExamResults', function(e, data) {
        	console.log('Entered result');
        	console.log(data);
            $scope.results = data;
            console.log('Scope Result');
            console.log($scope.results);
        });

        $scope.goBack = function() {
			$ionicHistory.goBack();
		}
	});

});

