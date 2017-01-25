angular.module('topper.examModel',[])

.factory('ExamModel', function() {

    function createTable(oDB) {
        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'CREATE TABLE IF NOT EXISTS t_exams (' +
                    'id UNIQUE, ' +
                    'user_id, ' +
                    'raw_score, ' +
                    'total_score, ' +
                    'percentage, ' +
                    'time, ' +
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

    function store(oDB, oData) {
        if (oDB) {
            oDB.transaction(function (tx) {
                var _sQuery = 'INSERT INTO t_exams (user_id, raw_score, total_score, percentage, time, created_at, updated_at) VALUES (' +
                    oData.user_id + ', ' +
                    oData.raw_score + ', ' +
                    oData.total_score + ', ' +
                    oData.percentage + ', ' +
                    '"' + oData.time + '", ' +
                    '"' + moment().format('YYYY-MM-DD H:mm:ss') + '", ' +
                    '"' + moment().format('YYYY-MM-DD H:mm:ss') + '"' +
                    ')';
                tx.executeSql(_sQuery);
            });

            return true;
        }

        console.error('No database object.');
        return false;
    }

    return {
        createTable: createTable,
        store: store,
    }
})
