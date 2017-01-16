angular.module('topper.profileCtrl', [])

.controller('ProfileCtrl', function(
	$scope, 
	$state, 
	$filter,
	$localStorage,
    $sessionStorage,
	$cordovaImagePicker, 
	$cordovaFileTransfer, 
	Http, 
	Modal
) {

	// Before entering the profile page
	$scope.$on('$ionicView.beforeEnter', function (e) {
		// Get the server URL
		$scope.server = Http.session();

		$scope.session = $sessionStorage.auth;
		$scope.userUpdate = $sessionStorage.auth;

		Modal.init($scope, 'editprofile');
	});

	$scope.$on('$ionicView.enter', function (e) {

		$scope.openEditProfile = function() {
			Modal.open();
		};

		$scope.closeEditProfile = function() {
			Modal.close();
		};

		$scope.submitEditProfile = function() {
			$scope.userUpdate.birthdate = moment($scope.userUpdate.birthdate).format('YYYY-MM-DD');

			Http.post('api/user/update/' + $scope.session.user_id, $scope.userUpdate).then(
				function(success) {
					console.log(success);
				}
			);

			$scope.userUpdate.birthdate = new Date($scope.userUpdate.birthdate);
		}

	});

	$scope.$on('$ionicView.beforeLeave', function (e) {
		Modal.destroy();
	});

	function updateData(oData) {
		return {
			user_id: oData.user_id,
			first_name: oData.first_name,
			last_name: oData.last_name,
			nickname: oData.nickname,
			gender: oData.gender,
			birthdate: new Date(oData.birthdate)
		}
	}

	// When upload button is clicked
	// $scope.uploadProfilePhoto = function() {
	// 	document.addEventListener('deviceready', function () {
	// 		if (window.imagePicker && window.FileTransfer) {
	// 			alert('Ready');
	// 			var options = {
	// 				maximumImagesCount: 1,
	// 				quality: 80
	// 			};

	// 			$cordovaImagePicker.getPictures(options)
	// 				.then(function (results) {
	// 					var _image = results[0];
	// 					var _server = $scope.server + 'api/file/profilephoto/' + $scope.session.user_id;

	// 					var options = {
	// 					    fileKey: 'file'
	// 					};

	// 					$cordovaFileTransfer.upload(_server, _image)
	// 						.then(function(result) {
	// 						// Success!
	// 							alert('Success');
	// 							alert(JSON.stringify(result.response));
	// 						}, function(err) {
	// 						// Error
	// 							alert('Error');
	// 							alert(JSON.stringify(err));
	// 						}, function (progress) {
	// 						// constant progress updates
	// 						});

	// 				}, function(error) {
	// 				// error getting photos
	// 				});
	// 		} else {
	// 			alert('Not ready');
	// 		}
	// 	}, false);
	// }

});

