angular.module('topper.loginCtrl', [])

.controller('LoginCtrl', function($scope, $state) {

    $scope.doLogin = function() {
        $state.go('menu.home');
    }

});

