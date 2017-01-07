angular.module('topper.examResultCtrl', [])

.controller('ExamResultCtrl', function($scope, $ionicScrollDelegate, $state, $stateParams, $ionicHistory, Http, Cache) {

    $scope.sttButton = false;

    $scope.scrollToTop = function() { //ng-click for back to top button
        $ionicScrollDelegate.scrollTop();
        $scope.sttButton = false;  //hide the button when reached top
    };

    $scope.getScrollPosition = function() {
        //monitor the scroll
        var moveData = $ionicScrollDelegate.getScrollPosition().top;
        // console.log(moveData);
        if (moveData > 150) {
            $scope.$apply(function() {
                $scope.sttButton = true;
            });//apply
        } else {
            $scope.$apply(function() {
                $scope.sttButton = false;
            });//apply
        }
    };  //getScrollPosition

    $scope.goBack = function() {
        $ionicHistory.goBack();
    }

	$scope.$on('$ionicView.beforeEnter', function (event) {
	}); 

	$scope.$on('$ionicView.enter', function (e) {
        $scope.results = Cache.get('ExamResults');

        if ($scope.results === undefined) {
            $state.go('menu.home');
        }
	});

});

