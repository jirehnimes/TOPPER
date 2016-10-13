angular.module('topper.studyModeMainCtrl', [])

.controller('StudyModeMainCtrl', function($scope, $state, $ionicHistory, Modal) {

    $ionicHistory.nextViewOptions({
        historyRoot: true
    });

    $scope.title = 'Study Mode';

    $scope.goStart = function() {
    	$state.go('menu.studymodeContent')
    }

    Modal.init($scope);

    $scope.openOptions = function() {
    	Modal.open();
    }

    $scope.test = function() {
    	Modal.close();
    }

});
