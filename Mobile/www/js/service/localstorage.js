angular.module('topper.localStorageSrvc',[])

.factory('LocalStorage', function(
	$q,
	$state,
	$timeout,
	$localStorage,
    $sessionStorage,
    Http,
	SessionModel,
	PasswordModel,
	ModuleModel,
	TopicModel,
	QuestionModel,
	SelectionModel,
	ExamModel,
	SchoolModel
) {

	var _DB = undefined;

	function init() {
		if (_DB) {
			return false;
		}

		_DB = window.openDatabase('topperdb', '1.0', 'Topper DB', 2 * 1024 * 1024);
		return true;
	}

	function loader(oScope) {

		// $timeout(function() { oScope.status = 'Creating tables...'; }, 2000);

		SessionModel.createTable(_DB);
		ModuleModel.createTable(_DB);
		TopicModel.createTable(_DB);
		QuestionModel.createTable(_DB);
		SelectionModel.createTable(_DB);
		ExamModel.createTable(_DB);
		SchoolModel.createTable(_DB);

		Http.get('api/module/' + $sessionStorage.auth['id']).then(
			function(success) {
		  		ModuleModel.store(_DB, success.data);
			}
		);

		// $timeout(function() { oScope.status = 'Tables created...'; }, 1000);

		// $timeout(function() { oScope.status = 'Done loading...'; }, 2000);

		// $state.go('menu.home');
	}

	function login(sQuery) {
		_DB.transaction(function (tx) {
            tx.executeSql(sQuery);
        });
	}

	return {
		init : init,
		loader : loader,
		login : login
	}
})
