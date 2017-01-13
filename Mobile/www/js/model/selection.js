angular.module('topper.selectionModel',[])

.factory('SelectionModel', function() {

    function createTable(oDB) {
        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'CREATE TABLE IF NOT EXISTS t_selections (' +
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

        update: function(oData, iIsLogin) {
            return update(oData, iIsLogin);
        },

        destroy: function(oDB) {

        }
    }
})
