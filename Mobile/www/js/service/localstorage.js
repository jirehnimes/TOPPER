angular.module('topper.localStorageSrvc',[])

.factory('LocalStorage', function(
	$q,
	$state,
	$timeout,
	$localStorage,
    $sessionStorage,
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
			console.log('Local storage already loaded.');
			return false;
		}

		_DB = window.openDatabase('topperdb', '1.0', 'Topper DB', 2 * 1024 * 1024);

		SessionModel.createTable(_DB);
		ModuleModel.createTable(_DB);
		TopicModel.createTable(_DB);
		QuestionModel.createTable(_DB);
		SelectionModel.createTable(_DB);
		ExamModel.createTable(_DB);
		SchoolModel.createTable(_DB);

		return true;
	}

	function loader(oScope) {
		$timeout(function() { oScope.status = 'Done loading...'; }, 2000);
	}

	function login(sQuery) {
		_DB.transaction(function (tx) {
            tx.executeSql(sQuery);
        });
	}

	function logout() {
		_DB.transaction(function(tx) {
			tx.executeSql('SELECT * FROM t_session WHERE is_login=1', [], function(_tx, results) {
				console.log(results);
				var _oData = results.rows[0];

				if (_oData) {
					var _sQuery = SessionModel.update({id: _oData.user_id}, 0);
					_tx.executeSql(_sQuery);
					console.log(_sQuery);
					return true;
				}
				return false;
			}, null);
		});
	}

	return{
		init: function() {
			return init();
		},

		login: login,

		logout: function() {
			return logout();
		},

		session: function() {
			return session();
		},

		loader: loader
	}
})
