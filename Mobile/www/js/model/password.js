angular.module('topper.passwordModel',[])

.factory('PasswordModel', function() {

    function createTable(oDB) {
        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'CREATE TABLE IF NOT EXISTS t_passwords (' +
                    'user_id UNIQUE PRIMARY KEY, ' +
                    'password' +
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

    function store(oDB, oData) {
        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'INSERT OR REPLACE INTO t_passwords VALUES (' +
                    oData.id + ', ' +
                    '"' + oData.password + '"' +
                    ')';
                tx.executeSql(_sQuery);
            });

            return true;
        }

        console.error('No database object.');
        return false;
    }

    function update(oData) {

    }

    function destroy(oDB) {

    }

    return {
        createTable : createTable,
        store : store
    }
})
