angular.module('topper.menuCtrl', [])

.controller('MenuCtrl', function($scope, $state) {

    var _oLeftMenu = $('#leftMenu');
    var _oRightMenu = $('#rightMenu');

    $scope.showLeft = function() {
        _oLeftMenu.show();
        _oRightMenu.hide();
    }

    $scope.showRight = function() {
        _oLeftMenu.hide();
        _oRightMenu.show();
    }

});

