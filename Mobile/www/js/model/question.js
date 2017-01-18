angular.module('topper.questionModel',[])

.factory('QuestionModel', function(SelectionModel) {

    function createTable(oDB) {
        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'CREATE TABLE IF NOT EXISTS t_questions (' +
                    'id UNIQUE PRIMARY KEY, ' +
                    'topic_id, ' +
                    'reference_id, ' +
                    'text, ' +
                    'rationale, ' +
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
                    var _sQuery = 'INSERT OR REPLACE INTO t_questions VALUES (' +
                        value.id + ', ' +
                        value.topic_id + ', ' +
                        value.reference_id + ', ' +
                        '"' + value.text + '", ' +
                        '"' + value.rationale + '", ' +
                        '"' + value.created_at + '", ' +
                        '"' + value.updated_at + '"' +
                        ')';
                    tx.executeSql(_sQuery);
                });
                SelectionModel.store(oDB, value.selection);
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
