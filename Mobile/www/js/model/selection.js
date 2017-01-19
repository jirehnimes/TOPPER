angular.module('topper.selectionModel',[])

.factory('SelectionModel', function() {

    function createTable(oDB) {
        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'CREATE TABLE IF NOT EXISTS t_selections (' +
                    'id UNIQUE PRIMARY KEY, ' +
                    'question_id, ' +
                    'choice, ' +
                    'isAnswer, ' +
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
                    var _sQuery = 'INSERT OR REPLACE INTO t_selections VALUES (' +
                        value.id + ', ' +
                        value.question_id + ', ' +
                        '"' + value.choice + '", ' +
                        value.isAnswer + ', ' +
                        '"' + value.created_at + '", ' +
                        '"' + value.updated_at + '"' +
                        ')';
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
        createTable: createTable,

        all: function(oDB) {

        },

        show: function(oDB) {

        },

        store: store,

        update: function(oData, iIsLogin) {
            return update(oData, iIsLogin);
        },

        destroy: function(oDB) {

        }
    }
})
