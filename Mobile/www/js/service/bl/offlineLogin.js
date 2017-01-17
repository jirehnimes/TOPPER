angular.module('topper.offlineLoginBL',[])

.factory('OfflineLoginBL', function(
    $state,
    $localStorage,
    $sessionStorage,
    $cordovaToast,
    Http,
    Util
) {

    var _oDB = undefined;

    var _oData = undefined;

    var _oSession = undefined;

    function init(oDB, oData) {
        _oDB = oDB;
        _oData = oData;

        _oDB.transaction(function (tx) {
            var _sQuery = 'SELECT * FROM t_session WHERE email="' + _oData.email + '"';
            tx.executeSql(_sQuery, [], checkEmail);
        });
    }

    function checkEmail(tx, results) {
        if (results.rows.length === 1) {
            _oSession = results.rows[0];
            _oDB.transaction(function (_tx) {
                var _sQuery = 'SELECT * FROM t_passwords WHERE user_id=' + _oSession.id + ' AND password="' + _oData.password + '"';
                _tx.executeSql(_sQuery, [], checkPassword);
            });
        } else {
            Util.message('Invalid email.');
            $state.go('index');
        }
    }

    function checkPassword(tx, results) {
        var _res = undefined;

        if (results.rows.length === 1) {
            alert('Log in successfully.');
            $sessionStorage.auth = _oSession;
            _res = true;
        } else {
            Util.message('Invalid password.');
            _res = false;
        }

        _oDB = undefined;
        _oData = undefined;
        _oSession = undefined;

        if (_res) {
            $state.go('menu.home');
        } else {
            $state.go('index');
        }
    }

    return {
        init : init
    }
})
