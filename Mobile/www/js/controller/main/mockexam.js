angular.module('topper.mockExamCtrl', [])

.controller('MockExamCtrl', function($scope) {

    $scope.timerRunning = true;

    $scope.qNum = 0;

    $scope.aQuestions = [
        {
            id: 1,
            module: 1,
            show: true
        },
        {
            id: 2,
            module: 1,
            show: false
        },
        {
            id: 3,
            module: 1,
            show: false
        }
    ];

    console.log($scope.aQuestions);
    console.log($scope.aQuestions[0]);

    $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };

    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

    $scope.$on('timer-stopped', function (event, data){
        console.log('Timer Stopped - data = ', data);
    });

    $scope.goPrev = function() {
        console.log('Previous');
        --$scope.qNum;
    }

    $scope.goNext = function() {
        console.log('Next');
        ++$scope.qNum;
    }

});
