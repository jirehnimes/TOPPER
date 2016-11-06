angular.module('topper.localStorageSrvc',[])

.factory("LocalStorage", function($q, SessionModel, ModuleModel) {

	var _DB = undefined;

	function init() {
		if (_DB) {
			console.log('Local storage already loaded.');
			return false;
		}

		_DB = window.openDatabase('topperdb', '1.0', 'Topper DB', 2 * 1024 * 1024);
		console.log('Local storage loaded.');

		console.log('Initiating tables...');
		var _bRes = SessionModel.createTable(_DB);
		console.log(_bRes);
		var _bRes = ModuleModel.createTable(_DB);
		console.log(_bRes);

		return true;
	}

	function session() {

		// Initialize promise
	    var _mDeferred = $q.defer();

		init();
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

	function login(oUser) {
		console.log('Local storage login');
		console.log(oUser);

		_DB.transaction(function(tx) {
			tx.executeSql('SELECT * FROM t_session WHERE user_id=' + oUser.id, [], function(_tx, results) {
				var _resLen = results.rows.length;
				var _sQuery = '';

				if (_resLen === 0) {
					_sQuery = SessionModel.store(oUser);

				} else {
					_sQuery = SessionModel.update(oUser	);
				}

				console.log('Login query');
				console.log(_sQuery);

				_tx.executeSql(_sQuery);

				return true;
			}, null);
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

		login: function(oUser) {
			return login(oUser);
		},

		logout: function() {
			return logout();
		},

		session: function() {
			return session();
		}
	}
})
