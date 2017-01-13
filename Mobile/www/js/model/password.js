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

    function store(oData) {

    }

    function update(oData) {

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

        update: function(oData) {
            return update(oData);
        },

        destroy: function(oDB) {

        }
    }
})
