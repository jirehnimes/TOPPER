angular.module('topper.topicModel',[])

.factory('TopicModel', function(QuestionModel) {

    function createTable(oDB) {
        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'CREATE TABLE IF NOT EXISTS t_topics (' +
                    'id UNIQUE PRIMARY KEY, ' +
                    'module_id, ' +
                    'name, ' +
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
                    var _sQuery = 'INSERT OR REPLACE INTO t_topics VALUES (' +
                        value.id + ', ' +
                        value.module_id + ', ' +
                        '"' + value.name + '", ' +
                        '"' + value.created_at + '", ' +
                        '"' + value.updated_at + '"' +
                        ')';
                    tx.executeSql(_sQuery);
                });
                QuestionModel.store(oDB, value.questions);
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
