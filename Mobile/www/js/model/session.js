angular.module('topper.sessionModel',[])

.factory("SessionModel", function() {

    var TABLE = 't_session';

    function createTable(oDB) {
        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'CREATE TABLE IF NOT EXISTS t_session (' + 
                    'user_id UNIQUE, ' + 
                    'is_login, ' + 
                    'first_name, ' + 
                    'last_name, ' +
                    'email, ' +
                    'password, ' +
                    'birthdate, ' +
                    'gender, ' +
                    'nickname, ' +
                    'photo, ' +
                    'user_type, ' +
                    'access_type' +
                ')';
                
                tx.executeSql(_sQuery);
            });

            return true;
        }

        console.error('No database object.');
        return false;
    }

    function all(oDB) {

    }

    function show(oDB) {

    }

    function store(oData) {
        return 'INSERT INTO t_session VALUES (' + 
            oData.id + ', ' +
            '1, ' +
            '"' + oData.first_name + '", ' +
            '"' + oData.last_name + '", ' +
            '"' + oData.email + '", ' +
            '"' + oData.password + '", ' +
            '"' + oData.birthdate + '", ' +
            '"' + oData.gender + '", ' +
            '"' + oData.nickname + '", ' +
            '"' + oData.photo + '", ' +
            '"' + oData.user_type + '", ' +
            '"' + oData.access_type + '"' +
        ')';
    }

    function update(oData, iIsLogin = 1) {
        return 'UPDATE t_session SET ' + 
            'is_login=' + iIsLogin + 
            (oData.first_name ? ', first_name="' + oData.first_name + '"' : '') +
            (oData.last_name ? ', last_name="' + oData.last_name + '"' : '') +
            (oData.email ? ', email="' + oData.email + '"' : '') +
            (oData.password ? ', password="' + oData.password + '"' : '') +
            (oData.birthdate ? ', birthdate="' + oData.birthdate + '"' : '') +
            (oData.gender ? ', gender="' + oData.gender + '"' : '') +
            (oData.nickname ? ', nickname="' + oData.nickname + '"' : '') +
            (oData.photo ? ', photo="' + oData.photo + '"' : '') +
            (oData.user_type ? ', user_type="' + oData.user_type + '"' : '') +
            (oData.access_type ? ', access_type="' + oData.access_type + '"' : '') +
            ' WHERE user_id=' + oData.id;
    }

    function destroy(oDB) {

    }

    return {
        createTable: function(oDB) {
            return createTable(oDB);
        },

        all: function(oDB) {

        },

        show: function(oDB) {

        },

        store: function(oData) {
            return store(oData);
        },

        update: function(oData, iIsLogin) {
            return update(oData, iIsLogin);
        },

        destroy: function(oDB) {

        }
    }
})
