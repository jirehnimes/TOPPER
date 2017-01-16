angular.module('topper.moduleModel',[])

.factory('ModuleModel', function() {

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

    function all(oDB) {

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
                    console.log(_sQuery);
                    tx.executeSql(_sQuery);
                });
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
