angular.module('topper.localStorageSrvc',[])

.factory('LocalStorage', function(
	$q,
	$state,
	$timeout,
	$localStorage,
    $sessionStorage,
    Http,
    Util,
	SessionModel,
	PasswordModel,
	ModuleModel,
	TopicModel,
	QuestionModel,
	SelectionModel,
	ExamModel,
	SchoolModel,
	OfflineLoginBL
) {

	var _DB = undefined;

	function init() {
		if (_DB) {
			return false;
		}

		_DB = window.openDatabase('topperdb', '1.0', 'Topper DB', 2 * 1024 * 1024);

		SessionModel.createTable(_DB);
		PasswordModel.createTable(_DB);
		ModuleModel.createTable(_DB);
		TopicModel.createTable(_DB);
		QuestionModel.createTable(_DB);
		SelectionModel.createTable(_DB);
		ExamModel.createTable(_DB);
		SchoolModel.createTable(_DB);

		return true;
	}

	function loader(oScope) {

		Http.get('api/module/' + $sessionStorage.auth['id']).then(
			function(success) {
		  		ModuleModel.store(_DB, success.data);
			}
		);

		// $timeout(function() { oScope.status = 'Done loading...'; }, 2000);

		$state.go('menu.home');
	}

	function login(oData) {
		SessionModel.store(_DB, oData);
	}

	function storePassword(oData) {
		PasswordModel.store(_DB, oData);
	}

	function offlineLogin(oData) {
        OfflineLoginBL.init(_DB, oData);
	}

	return {
		init : init,
		loader : loader,
		login : login,
		offlineLogin : offlineLogin,
		password : storePassword
	}
})
