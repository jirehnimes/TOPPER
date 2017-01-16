angular.module('topper.sesssionBL',[])

.factory('SessionBL', function(
    $state,
    $localStorage,
    $sessionStorage,
    $cordovaNetwork,
    $cordovaToast,
    Http,
    Util,
    LocalStorage,
    SessionModel
) {

    function checkLoginData(oData) {
        if (!oData.email) {
            Util.message('Invalid email data.');
            return false;
        }

        if (!oData.password) {
            Util.message('Invalid password data.');
            return false;
        }

        return true;
    }

    function successHttpLogin(aSuccess) {
        if (aSuccess['msg'] === 'wrong email') {
            Util.message('Email doesn\'t exist.');
            return false;
        }

        if (aSuccess['msg'] === 'wrong password') {
            Util.message('Password mismatch.');
            return false;
        }

        if (aSuccess['msg'] === 'login success') {
            alert('Log in successfully.');
            $sessionStorage.auth = aSuccess['data'];
            var sQuery = SessionModel.store(aSuccess['data']);
            LocalStorage.login(sQuery);
            $state.go('loader');
            return true;
        }
    }

    function offlineLogin(oData) {

    }

    function checkSession() {
        if (!$sessionStorage.auth) {
            $state.go('index');
        }
    }

    function doLogin(oData) {
        var bRes = checkLoginData(oData);

        if (bRes === true) {
            // if (window.cordova && $cordovaNetwork.isOnline() === true) {
                Http.post('api/user/login', oData).then(successHttpLogin);
            // } else {
                // offlineLogin(oData);
            // }
        }
    }

    function doRegister(oData) {

    }

    function doLogout() {
        delete $sessionStorage.auth;
        $state.go('index');
    }

    return {
        login : doLogin,
        register : doRegister,
        logout : doLogout,
        check : checkSession
    }
})
