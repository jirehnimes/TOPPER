angular.module('topper.examBL',[])

.factory('ExamBL', function(
    $q,
    $state,
    $localStorage,
    Util
) {
    var _oDB = undefined;

    // Initialize promise
    var _mDeferred = $q.defer();

    function init(oDB) {
        _oDB = oDB;

        var aModuleIds = Util.getId($localStorage.examOptions.list, 'iFlag', true);

        // if (aModuleIds.length === 0) {
        //     _mDeferred.resolve(false);
        // } else {
            var _sIn = '(';

            aModuleIds.forEach(function(item, index) {
                if (index === aModuleIds.length - 1) {
                    _sIn += item + ')';
                    return false;
                }

                _sIn += item + ', ';
            });

            _oDB.transaction(function (tx) {
                var _sQuery = 'SELECT * FROM t_modules WHERE id IN ' + _sIn;
                tx.executeSql(_sQuery, [], renderModules);
            });
        // }

        // Return stored promise
        return _mDeferred.promise;
    }

    function renderModules(tx, result) {
        var aModules = $.makeArray(result.rows);

        aModules.forEach(function(item, index) {
            _oDB.transaction(function (_tx) {
                var _sQuery = 'SELECT * FROM t_topics WHERE module_id = ' + item.id;
                _tx.executeSql(_sQuery, [], function(__tx, __result) {
                    if (__result.rows.length !== 0) {
                        // var aTopics = $.makeArray(__result.rows);
                        // aTopics = renderQuestions(aTopics, item);
                        console.log('a');
                    } else {
                        console.log('b');
                        // _mDeferred.resolve(false);
                    }
                });
            });
        });
    }

    function renderQuestions(aTopics, aModule) {
        aTopics.forEach(function(item, index) {
            _oDB.transaction(function (tx) {
                var _sQuery = 'SELECT * FROM t_questions WHERE topic_id = ' + item.id;
                tx.executeSql(_sQuery, [], function(_tx, _result) {
                    var aQuestions = $.makeArray(_result.rows);
                    aTopics[index].module = aModule;
                    renderSelections(aQuestions, item);
                });
            });
        });
    }

    function renderSelections(aQuestions, aTopic) {
        aQuestions.forEach(function(item, index) {
            _oDB.transaction(function (tx) {
                var _sQuery = 'SELECT * FROM t_selections WHERE question_id = ' + item.id;
                tx.executeSql(_sQuery, [], function(_tx, _result) {
                    aQuestions[index].selections = $.makeArray(_result.rows);
                    aQuestions[index].topic = aTopic;
                });
            });
        });

        _mDeferred.resolve(aQuestions);
    }

    return {
        init : init,
    }
});
