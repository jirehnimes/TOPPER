angular.module('topper.menuCtrl', [])

.controller('MenuCtrl', function(
    $scope, 
    $state, 
    $localStorage,
    $sessionStorage,
    Http,
    SessionBL
) {

    // Before entering the menu page
    $scope.$on('$ionicView.beforeEnter', function (e) {
        // Get the server URL
        $scope.server = Http.session();

        $scope.nickname = $sessionStorage.auth['nickname'];
    });

    // leftMenu HTML element object
    // var _oLeftMenu = $('#leftMenu');
    
    $scope.goExam = function(sType) {
        $state.go('menu.exam_index', {type: sType});
    }

    // When logout button is clicked
	$scope.doLogout = function() {
        SessionBL.logout();
	}
});

