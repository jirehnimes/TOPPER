angular.module('topper.questionModel',[])

.factory('QuestionModel', function() {

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
