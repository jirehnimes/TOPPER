angular.module('topper.moduleModel',[])

.factory('ModuleModel', function($q, TopicModel) {

    function createTable(oDB) {
        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'CREATE TABLE IF NOT EXISTS t_modules (' +
                    'id UNIQUE PRIMARY KEY, ' +
                    'name, ' +
                    'is_premium, ' +
                    'created_at, ' +
                    'updated_at' +
                ')';

                tx.executeSql(_sQuery);
            });

            return true;
        }

        console.error('No database object.');
        return false;
    }

    function all(oDB, oData) {
        // Initialize promise
        var _mDeferred = $q.defer();

        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'SELECT * FROM t_modules WHERE is_premium=0';

                if (oData['access_type'] === 'premium') {
                    _sQuery = 'SELECT * FROM t_modules';
                }

                tx.executeSql(_sQuery, [], function(_tx, _result) {
                    _mDeferred.resolve(_result);
                });
            });

            // Return stored promise
            return _mDeferred.promise;
        }

        console.error('No database object.');
        return false;
    }

    function show(oDB) {

    }

    function store(oDB, oData) {
        if (oDB) {
            oData.forEach(function(value, index) {
                oDB.transaction(function (tx) {
                    var _sQuery = 'INSERT OR REPLACE INTO t_modules VALUES (' +
                        value.id + ', ' +
                        '"' + value.name + '", ' +
                        value.is_premium + ', ' +
                        '"' + value.created_at + '", ' +
                        '"' + value.updated_at + '"' +
                        ')';
                    tx.executeSql(_sQuery);
                });
                TopicModel.store(oDB, value.topics);
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
        all : all,
        store : store
    }
})
