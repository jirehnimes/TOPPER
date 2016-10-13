angular.module('topper.mockExamMainCtrl', [])

.controller('MockExamMainCtrl', function($scope, $state, $ionicHistory) {

    $ionicHistory.nextViewOptions({
        historyRoot: true
    });

    $scope.title = 'Mock Exam';

    $scope.goStart = function() {
    	$state.go('menu.mockexamContent')
    }

});
