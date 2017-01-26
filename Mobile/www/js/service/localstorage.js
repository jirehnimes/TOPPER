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
	OfflineLoginBL,
	ExamBL
) {

	var _DB = undefined;

	function init() {
		if (!_DB) {
			_DB = window.openDatabase('topperdb', '1.0', 'Topper DB', 2 * 1024 * 1024);

			SessionModel.createTable(_DB);
			PasswordModel.createTable(_DB);
			ModuleModel.createTable(_DB);
			TopicModel.createTable(_DB);
			QuestionModel.createTable(_DB);
			SelectionModel.createTable(_DB);
			ExamModel.createTable(_DB);
			SchoolModel.createTable(_DB);
		}
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

	function getModuleAll() {
		// Initialize promise
        var _mDeferred = $q.defer();

		ModuleModel.all(_DB, $sessionStorage.auth).then(
			function success(success) {
				_mDeferred.resolve(success);
			}
		);

		// Return stored promise
        return _mDeferred.promise;
	}

	function loadExam() {
		return ExamBL.init(_DB);
	}

	function storeExam(oData) {
		ExamModel.store(_DB, oData);
	}

	function getMockResults() {
		return ExamModel.all(_DB);
	}

	return {
		init : init,
		loader : loader,
		login : login,
		offlineLogin : offlineLogin,
		password : storePassword,
		moduleAll : getModuleAll,
		loadExam : loadExam,
		storeExam : storeExam,
		getMockResults : getMockResults
	}
})
