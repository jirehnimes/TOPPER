angular.module('topper.localStorageSrvc',[])

.factory('LocalStorage', function(
	$q,
	$state,
	$timeout,
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

	function session() {

		// Initialize promise
	    var _mDeferred = $q.defer();

		_DB.transaction(function(tx) {
			tx.executeSql('SELECT * FROM t_session WHERE is_login=1', [], function(_tx, results) {
				if (results.rows.length === 1) {
					var _oData = results.rows[0];
					return _mDeferred.resolve(_oData);
				}
				_mDeferred.resolve(false);
			}, null);
		});

		// Return stored promise
	    return _mDeferred.promise;
	}

	function login(sStatus, oUser) {
		if (sStatus === 'online') {
			_DB.transaction(function(tx) {
				tx.executeSql('SELECT * FROM t_session WHERE id=' + oUser.id, [], function(_tx, results) {
					var _resLen = results.rows.length;
					var _sQuery = '';

					if (_resLen === 0) {
						_sQuery = SessionModel.store(oUser);
					} else {
						_sQuery = SessionModel.update(oUser);
					}

					_tx.executeSql(_sQuery);

					return $state.go('loader');
				}, null);
			});	
		} else {
			_DB.transaction(function(tx) {
				tx.executeSql('SELECT * FROM t_session WHERE email="' + oUser.email + '"', [], function(_tx, results) {
					var _resLen = results.rows.length;
					if (_resLen === 0) {
						return $state.go('index');
					} 

					_tx.executeSql('SELECT * FROM t_passwords WHERE user_id=' + results.id + 'password=' + oUser.password, [], function(__tx, _results) {
						var __resLen = _results.rows.length;
						if (_resLen === 0) {
							return $state.go('index');
						} 

						_tx.executeSql(SessionModel.update(oUser));

						return $state.go('loader');
					}, null);
				}, null);
			});	
		}
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

		login: function(sStatus, oUser) {
			return login(sStatus, oUser);
		},

		logout: function() {
			return logout();
		},

		session: function() {
			return session();
		},

		loader: loader
	}
})
